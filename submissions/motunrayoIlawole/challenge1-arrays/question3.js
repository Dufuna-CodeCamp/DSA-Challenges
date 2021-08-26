function solution (nums) {
    // get all the positive integers sorted
    let sortedNums = nums.filter(num => num >= 1).sort((a, b) => a - b);


    // store the smallest positive integer which is 1
    let smallestInteger = 1;
    for (let i = 0; i < sortedNums.length; i++) {
        // if the current smallest integer is less than the current number in the loop, return the current smallest integer
        if (smallestInteger < sortedNums[i]) {
            return smallestInteger;
        }

        // otherwise, the current smallest integer is the current number + 1
        smallestInteger = sortedNums[i] + 1;
    }

    return smallestInteger;

}

console.log(solution([7, 8, 9, 11, 12]));

// Time complexity - O(n2)
// Space complexity - O(n2)