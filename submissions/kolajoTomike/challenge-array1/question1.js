const getLongestCommonPrefixes = (arr) => {
  const [first, ...others] = arr;
  let prefix = "";
  for (let i = 0; i < first.length; i++) {
    let isPrefix = true;
    for (j in others) {
      if (others[j][i] !== first[i]) {
        isPrefix = false;
        break;
      }
    }

    if (isPrefix) {
      prefix += first[i];
    } else break;
  }

  return prefix;
};

console.log(getLongestCommonPrefixes(["chair", "cheese", "church"]));
