function solution(strs) {
    // store the current string from the loop
    let currentStr = "";

    // store the common prefixes from each loop round
    let commonPrefix = [];

    // loop through the strings in the given array
    for (let i = 0; i < strs.length - 1; i++) {
        // store the current string
        currentStr = strs[i];

        // store the common prefix for the current loop round
        let current = ""

        // loop through the letters in the current string
        for (let j = 0; j < currentStr.length; j++) {
            // if the first letter of the current string is not the same as the first letter of the next string, then it means there is no common prefix for the current loop round for the array of strings
            if (currentStr[0] !== strs[i+1][0]) {
                current = "";
            }

            // If the first and subsequent letters of the current string are the same as that of the next string, add them to the common prefix for the current loop round.
            if (currentStr[j] === strs[i+1][j]) {
                current += currentStr[j]
            } else {
                // When one letter of the current string is found not to be similar to that of the next string, push an empty string to the common prefix for the current loop round.
                current += "";
            }
            
        }

        // push the common prefix for the current loop to the commonPrefix array
        commonPrefix.push(current);
    }


    // sort the commonPrefix array and return the first element -The string that is common in all the elements in the commonPrefix array.
    return commonPrefix.sort()[0];
}

const strs = ['dog', 'cacecar', 'car'];

console.log(solution(strs));

// Time complexity - O(n2)
// Space complexity - O(n2)