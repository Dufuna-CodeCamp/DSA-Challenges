//  Question one

function solution1(strs) {
  let toBeReturned = "";
  for (let i = 1; i < strs[0].length; i++) {
    if (strs.every((str) => str.startsWith(strs[0].substr(0, i)))) {
      toBeReturned = strs[0].substr(0, i);
    } else {
      break;
    }
  }
  return toBeReturned;
}
console.log(solution1(["flower", "flow", "flight"]));
console.log(solution1(["dog", "racecar", "car"]) === "");
console.log(solution1(["water", "want", "watercan"]));

/* 
I checked if all the string in the array start with the same characters of the first string in the array.
If they do, I return the common character.
*/

// time complexity: O(n)
// space complexity: O(1)
