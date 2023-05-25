"use strict";
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
  //Implement every
  this.every = function (fn) {
    if (this.length === 0) {
      return true;
    }
    for (let i = 0; i < this.length; i++) {
      if (!fn(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
}

const arr = new MyArray(2, 4, 6, 8, 10);
const numbs = new MyArray(1, 3, 5, 7, 9);
console.log(arr.every((el) => el % 2 === 0));
console.log(numbs.every((el) => el % 2 === 0));
