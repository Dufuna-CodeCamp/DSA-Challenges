// Question 3

function solution3(nums) {
  //   nums.sort((a, b) => a - b);
  let toBeReturned = 1;
  while (nums.findIndex((num) => num === toBeReturned) !== -1) {
    toBeReturned++;
  }
  return toBeReturned;
}

console.log(solution3([1, 2, 0]));
console.log(solution3([3, 4, -1, 1]));
console.log(solution3([7, 8, 9, 11, 12]));

/* 
I checked from 1 to the largest number in the array. If the number is not found, then the number is the missing number.
*/

// time complexity: O(n)

// space complexity: O(1)
