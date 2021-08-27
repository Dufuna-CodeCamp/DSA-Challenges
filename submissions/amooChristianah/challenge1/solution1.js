const getCommonPrefix = (arr) => {
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
  
  console.log( getCommonPrefix( ["age", "agile", "agressive"]
  ) )
 const getResult = (arr, values) => {
    const ret = [];
    arr.forEach((el, i) => {
      if (values.includes(el) && !ret.includes(i)) {
        ret.push(i);
      }
    });
  
    return ret.sort((a, b) => a - b);
  };