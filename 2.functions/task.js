// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
    min = arr[0];
    max = arr[0];
    sum = 0;

  for(let i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : max = max;
    arr[i] < min ? min = arr[i] : min = min;
    sum += arr[i];

    if (arr[i] < -100 || arr[i] > 100) {
      return 'Введите число в диапазоне от -100 до 100';
    }
  }

  avg = +(sum / arr.length).toFixed(2);
  return { min:min, max:max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++) {
    let attachment = func(arrOfArr[i]);
    attachment > max ? max = attachment : max = max;
  }

  return max
}

// Задание 3
function worker2(arr) {
  let min, max;

  min = arr[0];
  max = arr[0];

  for(let i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : max = max;
    arr[i] < min ? min = arr[i] : min = min;
  }

  return Math.abs(max - min);
}
