describe('Serialization and deserialization', function() {
    it('should correctly serialize and deserialize 50 numbers', function() {
      const numbers = Array.from({length: 50}, () => Math.floor(Math.random() * 300) + 1);
      assert.deepEqual(deserialize(serialize(numbers)), numbers);
    });
  
    it('should correctly serialize and deserialize 100 numbers', function() {
      const numbers = Array.from({length: 100}, () => Math.floor(Math.random() * 300) + 1);
      assert.deepEqual(deserialize(serialize(numbers)), numbers);
    });
  
    it('should correctly serialize and deserialize 500 numbers', function() {
      const numbers = Array.from({length: 500}, () => Math.floor(Math.random() * 300) + 1);
      assert.deepEqual(deserialize(serialize(numbers)), numbers);
    });
  
    it('should correctly serialize and deserialize 1000 numbers', function() {
      const numbers = Array.from({length: 1000}, () => Math.floor(Math.random() * 300) + 1);
      assert.deepEqual(deserialize(serialize(numbers)), numbers);
    });

    it('should correctly calculate compression ratio for different scenarios', function() {
      const numbers1 = Array.from({length: 100}, () => Math.floor(Math.random() * 9) + 1); // 1-digit numbers
      const numbers2 = Array.from({length: 100}, () => Math.floor(Math.random() * 90) + 10); // 2-digit numbers
      const numbers3 = Array.from({length: 100}, () => Math.floor(Math.random() * 900) + 100); // 3-digit numbers
      const numbers4 = Array.from({length: 300}, () => Math.floor(Math.random() * 100) + 1).concat(Array.from({length: 300}, () => Math.floor(Math.random() * 100) + 1).concat(Array.from({length: 300}, () => Math.floor(Math.random() * 100) + 1))); // 900 numbers, each with 3 digits
      const serialized1 = serialize(numbers1);
      const serialized2 = serialize(numbers2);
      const serialized3 = serialize(numbers3);
      const serialized4 = serialize(numbers4);
      const ratio1 = compressionRatio(numbers1, serialized1);
      const ratio2 = compressionRatio(numbers2, serialized2);
      const ratio3 = compressionRatio(numbers3, serialized3);
      const ratio4 = compressionRatio(numbers4, serialized4);
      assert.isAbove(ratio1, 0.5); // Expecting at least 50% compression
      assert.isAbove(ratio2, 0.5); // Expecting at least 50% compression
      assert.isAbove(ratio3, 0.5); // Expecting at least 50% compression
      assert.isAbove(ratio4, 0.5); // Expecting at least 50% compression
    });
});


    