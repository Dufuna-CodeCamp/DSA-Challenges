// Question 2

function solution2(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(solution2([2, 7, 11, 15], 9));
console.log(solution2([3, 2, 4], 6));
console.log(solution2([3, 3], 6));
console.log(solution2([1, 2, 9, 6], 10));
