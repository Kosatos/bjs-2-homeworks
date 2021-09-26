// function solveEquation(a, b, c) {
// 	"use strict";
// 	let arr = [];
// 	let d = b ** 2 - 4 * a * c;
// 	let x1;
// 	let x2;
// 	if (d === 0) {
// 		x1 = -b / (2 * a);
// 		arr.push(x1);
// 	} else if (d > 0) {
// 		x1 = (-b + Math.sqrt(d)) / (2 * a);
// 		x2 = (-b - Math.sqrt(d)) / (2 * a);
// 		arr.push(x1, x2);
// 	} else {
//     arr = arr;
//   }
// 	return arr; // array
// }

function solveEquation(a, b, c) {
	const discriminant = b**2 - 4 * a * c;
	if (discriminant > 0){
		return [(- b + Math.sqrt(discriminant)) / (2 * a), (- b - Math.sqrt(discriminant)) / (2 * a)];
	} else if (discriminant === 0) {
		return [- b / (2 * a)];
	}
	return [];
}






//   Проверка на корректность ввода даты
const presentDate = new Date();
const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 1));

function monthsDiff(date) {
	let month1 = presentDate.getMonth();
	let month2 = date.getMonth();
	let year1 = presentDate.getFullYear();
	let year2 = date.getFullYear();
	let numberOfMonths;
	if (month1 === 0) {
		month1++;
		month2++;
	}
	return (numberOfMonths = (year2 - year1) * 12 + (month2 - month1));
}



function calculateTotalMortgage(percent, contribution, amount, date) {
	'use strict';

  // Проверки на тип данных
  
  let percentValue = percent;
	if (typeof percent === 'string') {
		percent = +percent;
		if (isNaN(percent)) {
			const warningPercent = `Параметр "Процентная ставка" содержит неправильное значение "${percentValue}"`;
			console.log(warningPercent);
			return warningPercent;
		}
  	}

  let contributionValue = contribution;
	if (typeof contribution === 'string') {
		contribution = +contribution;
	  	if (isNaN(contribution)) {
			const warningContribution = `Параметр "Начальный взнос" содержит неправильное значение "${contributionValue}"`;
			console.log(warningContribution);
			return warningContribution;
        }
	}

  let amountValue = amount;
	if (typeof amount === 'string') {
		amount = +amount;
	  	if (isNaN(amount)) {
		const warningAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amountValue}"`;
		console.log(warningAmount);
		return warningAmount;
		}
	}

  // Проверка на корректность ввода даты

  	// const presentDate = new Date();
	// const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 1));

	if ((date.getTime() - presentDate.getTime()) < (nextMonth.getTime() - presentDate.getTime()) && presentDate.getFullYear() == date.getFullYear()) {
		const warningDate = 'Введите корректную дату';
		console.log(warningDate);
		return warningDate;
	}

	let totalAmount;

	percent = percent / 100;

	let creditBody = amount - contribution;
  
	let months = monthsDiff(date);

	// function monthsDiff() {
	// 	let month1 = presentDate.getMonth();
	// 	let month2 = date.getMonth();
	// 	let year1 = presentDate.getFullYear();
	// 	let year2 = date.getFullYear();
	// 	let numberOfMonths;
	// 	if (month1 === 0) {
	// 		month1++;
	// 		month2++;
	// 	}
	// 	return (numberOfMonths = (year2 - year1) * 12 + (month2 - month1));
	// }

	// let month1 = presentDate.getMonth();
	// let month2 = date.getMonth();
	// let year1 = presentDate.getFullYear();
	// let year2 = date.getFullYear();
	// if (month1 === 0) {
	// 	month1++;
	// 	month2++;
	// }
	
	// let months = (year2 - year1) * 12 + (month2 - month1);
	
	let monthlyPayment = creditBody * (percent / 12 + percent / 12 / ((1 + percent / 12) ** months - 1));
	totalAmount = +(monthlyPayment * months).toFixed(2);
  
	return totalAmount;
}


