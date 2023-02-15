Array.prototype.myMap = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
};

String.prototype.len = function () {
  let i = 0;
  for (const key of this) {
    i++;
  }

  return i;
};

window.leng = function (a) {
  let i = 0;
  for (const key of a) {
    i++;
  }

  return i;
};

const arr1 = ["apple", "grapes", "kiwi", "orange"];
const arr2 = ["lion", "tiger", "cat"];
const str1 = "santhosh";

// arr1.myMap(function (data, index, arr) {
//   console.log(data, index, arr);
// });

// console.log("\n");

// arr2.myMap(function (data, index, arr) {
//   console.log(data, index, arr);
// });
// arr2.myMap();

// console.log("\n");

// arr1.map(function (data, index, arr) {
//   console.log(data, index, arr);
// });

console.log(str1.len());

console.log(leng(["a", "b"]));

console.log(leng("santhosh"));

const { log, table } = console;

log("hello");
table(arr1);
