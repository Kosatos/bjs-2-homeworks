function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((item, idx) => item === arr2[idx]); // boolean
  } else {
    return false;
  }
}

  function advancedFilter(arr) {
  let resultArr;

  resultArr = (arr.filter(item => item > 0 && item % 3 === 0)).map(item => item * 10);

  return resultArr; // array
}
