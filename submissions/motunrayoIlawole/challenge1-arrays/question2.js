function solution (nums, target) {
    let currentNum;
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        currentNum = nums[i];
        let diff = target - currentNum;


        if (nums.indexOf(diff) !== -1 && nums.indexOf(diff) !== nums.indexOf(currentNum)) {
            output.push(nums.indexOf(currentNum), nums.indexOf(diff));
            break;
        }
        if (nums.indexOf(diff) !== -1 && nums.indexOf(diff) === nums.indexOf(currentNum)) {
            if (nums.indexOf(currentNum) !== nums.lastIndexOf(diff)) {
                output.push(nums.indexOf(currentNum), nums.lastIndexOf(diff));
                break;
            }

        }

    }

    return output;
}

console.log(solution([1, 2, 9, 6], 10));