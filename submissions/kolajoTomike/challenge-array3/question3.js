const getSmallestInteger = (arr) => {
  const num2 = arr.sort((num1, num2) => num1 - num2);
  for (i in num2) {
    if (+i !== num2[i] && +i !== 0) {
      return +i;
    }
  }
  return arr.length;
};

console.log(getSmallestInteger([7, 8, 9, 11, 12]));
