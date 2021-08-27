const getSmallest = (arr) => {
    const b = arr.sort((a, b) => a - b);
    for (i in b) {
      if (+i !== b[i] && +i !== 0) {
        return +i;
      }
    }
    return arr.length;
  };
  
  console.log(getSmallest([1, 2, 0]))
 