// function declaration / function Statement

// name();

// function name() {
//   console.log("first func");
// }

// function name1() {
//   console.log("second func");
// }

// var - functional scope

// function sum() {
//   var a = 10;
//   var b = 20;
//   console.log(a + b);
// }

// console.log(a);

// Function acts as a Value
// anonymous function
// var a = function () {
//   console.log("hi am anonymous function");
// };

// Named Function
// var a = function a() {
//   console.log("hi am anonymous function");
// };

// Arrow Function

// var a = () => console.log("hi am anonymous function");

// a();

const doc = window.document;
let c = 0;

function update() {
  const text = doc.querySelector(".text");
  console.log(++c);
  text.style.color = "red";
  if (c === 1) {
    text.textContent = "Hi santhosh♥";
  } else if (c === 2) {
    text.textContent = "You are handsome";
  } else if (c === 3) {
    text.textContent = "You are talented person";
  } else if (c === 4) {
    text.textContent = "You are cute♥";
    c = 0;
  }
}
