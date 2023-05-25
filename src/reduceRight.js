'use strict';
//=================reduce================================
function myReduce(arr, callback, startValue) {
	let result;
	if (startValue) {
		result = startValue;
		for (let i = 0; i < arr.length; i++) {
			result = callback(result, arr[i], i, arr);
		}
	} else {
		result = arr[0];
		for (let i = 0; i < arr.length-1; i++) {
			result = callback(result, arr[i + 1], i, arr);
		}
	}
	return result;
}
const arrArr2 = [
	[0, 1],
	[2, 3],
	[4, 5],
  [6, 7],
  [8, 9],
];

console.log(myReduce(arrArr2, (a, b) => a.concat(b)));
//======================reduceRight==============================

function myReduceRight(arr, callback, startValue) {
  let result;
  
  if (startValue) {
    result = startValue;
    for (let i = arr.length - 1; i >= 0; i--) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    result = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
      result = callback(result, arr[i], i, arr);
    }
  }
  
  return result;
}
const arr = [1, 2, 3, 4, 5];

const sum = myReduceRight(arr, (accumulator, currentValue) => accumulator + currentValue);
console.log(sum); 

// const product = myReduceRight(arr, (accumulator, currentValue) => accumulator * currentValue, 2);
// console.log(product); 
console.log(myReduceRight(arr, (accumulator, currentValue) => accumulator - currentValue));


