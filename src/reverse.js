"use strict";
function myReverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedNumbs = myReverse(numbs);
console.log(reversedNumbs);

const arr = [1, 2, 3, 4, 5];
const reversedArr = myReverse(arr);
console.log(reversedArr);
