var longestCommonPrefix = function (strs) {
  // Return early on empty input
  if (!strs.length) {
    return "";
  }
  // Loop through the letters of the first string
  for (let i = 0; i <= strs[0].length; i++) {
    // Loop through the other strings
    for (let j = 1; j < strs.length; j++) {
      // Check if this character is also present in the same position of each string
      if (strs[0][i] !== strs[j][i]) {
        // If not, return the string up to and including the previous character
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));

// Time Complexity : Since we are iterating through all the strings and for each string we are iterating though each characters, so we can say that the time complexity is O(N M) where,

// N = Number of strings
// M = Length of the largest string s
// Auxiliary Space : To store the longest prefix string we are allocating space which is O(M).
