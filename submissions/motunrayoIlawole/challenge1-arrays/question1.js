function solution(strs) {
    let currentStr = "";
    let commonPrefix = [];

    for (let i = 0; i < strs.length - 1; i++) {
        currentStr = strs[i];
        let current = ""

        for (let j = 0; j < currentStr.length; j++) {
            if (currentStr[0] !== strs[i+1][0]) {
                current = "";
            }

            if (currentStr[j] === strs[i+1][j]) {
                current += currentStr[j]
            } else {
                current += "";
            }
            
        }

        commonPrefix.push(current);
    }


    return commonPrefix.sort()[0];
}

const strs = ['dog', 'racecar', 'car'];

console.log(solution(strs));