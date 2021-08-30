function twoSum(nums, target) {
  //Define a hashmap to store values, indices
  const map = new Map();
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    //Define complement, the formula used to check if the value is already inside the map
    const complement = target - nums[i];

    //If hashmap contains the difference, return stored index and current index
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    //Store (key: value => number: index) in hashmap
    map.set(nums[i], i);
  }
  return [];
}

console.groupCollapsed;
nums = [2, 7, 11, 15];
console.table(twoSum(nums, 9));

nums = [1, 2, 9, 6];
console.table(twoSum(nums, 10));
console.groupEnd;

//Time complexity: BigO(n); the list containing n elements was transversed only once.
//Each lookup in the table costs only O(1) time

//Space complexity: BigO(n) The extra space required depends on the number of items stored in the hash table,
//which stores at most n elements
