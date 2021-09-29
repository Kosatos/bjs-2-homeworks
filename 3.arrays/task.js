function compareArrays(arr1, arr2) {
  let result;

  result = arr1.every((idx) => arr1[idx] === arr2[idx]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = (arr.filter(item => item > 0 && item % 3 === 0)).map(item => item * 10);

  return resultArr; // array
}
