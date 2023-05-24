'use strict';
const arr = [2, 4, 6, 8, 10];
const numbs = [1, 3, 5, 7, 9]
// ------------some--------------------------------
function mySome(arr, callback, thisArg) {
	for (let i = 0; i < arr.length; i++) {
		if (callback.call(thisArg, arr[i], i, arr)) {
			return true;
		}
	}
	return false;
}
console.log(mySome(arr, el => el % 7 === 0));
console.log(mySome(numbs, el => el % 10 === 0));


//==============every===================
function myEvery(arr, callback, thisArg) {
	for (let i = 0; i < arr.length; i++) {
		if (!callback.call(thisArg, arr[i], i, arr)) {
			return false;
		}
	}
	return true;
}
console.log(myEvery(arr, el => el % 2 === 0));
