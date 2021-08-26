function solution(nums, target) {
    // loop through the numbers in the array to get the current number
    for (let i = 0; i < nums.length; i++) {

        // loop through the numbers in the array to get the numbers after the current number
        for (let j = i + 1; j < nums.length; j++) {
            // if the current number and one of the numbers after it add up to the target number, return their indices
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(solution([2, 7, 11, 15], 9));

// Time complexity - O(n2)
// Space complexity - O(1)