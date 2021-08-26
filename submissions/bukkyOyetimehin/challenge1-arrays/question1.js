//declaring variables
const longestCommonPrefix = function (strs) {
let prefix = strs[0];
  //iterating through each word in tha array
  for (let i = 1; i < strs.length; i++) {
    //iterating through the letters of each word in the array
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] !== strs[i][j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }
  return prefix
};

console.table(longestCommonPrefix(["flower", "flow", "flight"]));
console.table(longestCommonPrefix(["Shade", "Shabby", "Shalom"]));


// The complexity is O(n * m) where n is the number of words in the array,
//  and m is the length of the prefix.


