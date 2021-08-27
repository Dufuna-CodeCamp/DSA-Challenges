const getResult = (arr, values) => {
  const ret = [];
  arr.forEach((el, i) => {
    if (values.includes(el) && !ret.includes(i)) {
      ret.push(i);
    }
  });

  return ret.sort((a, b) => a - b);
};
const getIndices = (arr, target) => {
  const possibleValues = arr.filter((el) => el < target);
  if (possibleValues.length === 2) {
    return getResult(arr, possibleValues);
  }

  const possibleValuesDesc = possibleValues.sort((a, b) => b - a);
  const possibleValuesAcs = possibleValuesDesc.reverse();

  for (let i = 0; i < possibleValuesDesc.length; i++) {
    for (let j = 0; j < possibleValuesAcs.length; j++) {
      let firstNum = possibleValuesDesc[i];
      let secondNum = possibleValuesAcs[j];
      if (firstNum + secondNum === target) {
        return getResult(arr, [firstNum, secondNum]);
      }
    }
  }
};
console.log(getIndices([3, 3], 6));
