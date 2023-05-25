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

function MyArray(...args) {
  this.length = 0;
  for (let i = 0; i < args.length; i++) {
    this.push(args[i]);
  }
}

MyArray.prototype = new MyArrayProto();
function MyArrayProto() {
  // Implement push
  this.push = function (...args) {
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = args[i];
      }
    }
    return this.length;
  };
  //Implement reverse
  this.reverse = function () {
    const middleIndex = Math.floor(this.length / 2);
    for (let i = 0; i < middleIndex; i++) {
      [this[i], this[this.length - 1 - i]] = [
        this[this.length - 1 - i],
        this[i],
      ];
    }
    return this;
  };
}

const arr = new MyArray(2, 4, 6, 8, 10, 12, 14, 16);
console.log(arr);
console.log(arr.reverse());

const numbs = new MyArray(1, 3, 5, 7, 9);
console.log(arr.every((el) => el % 2 === 0));
console.log(numbs.every((el) => el % 2 === 0));
