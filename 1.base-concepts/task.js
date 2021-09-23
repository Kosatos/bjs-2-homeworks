function solveEquation(a, b, c) {
  'use strict'
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  if (d < 0) {
    arr = arr;
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  } else {
    x1 = (-b + Math.sqrt(d) ) / (2 * a);
    x2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(x1, x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict'  
  let totalAmount;
  percent = +percent / 100;
  let creditBody = Number(amount) - Number(contribution);
  let months = monthsDiff();
  function monthsDiff() {
    let presentDate = new Date();
    let year1 = presentDate.getFullYear();
    let year2 = date.getFullYear();
    let month1 = presentDate.getMonth();
    let month2 = date.getMonth();
    if (month1===0) { 
      month1++;
      month2++;
    }
    return numberOfMonths = (year2 - year1) * 12 + (month2 - month1);
  }
  let monthlyPayment = (creditBody * ((percent / 12) + (percent / 12) / (((1 + (percent / 12)) ** months) - 1)));
  totalAmount = +contribution + (monthlyPayment * months) + (percent * amount);
  return totalAmount.toFixed(2);
}
