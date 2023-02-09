const arr = ["apple", "grapes", "cherry", "orange", "kiwi"];
const r = ["berry", "chiku"];
// rest
// const [santhosh, ...rest] = arr;
// console.log(santhosh);
// console.log(rest);

// spread

const o = [...r, ...arr];

// console.log(o);

// Array.prototype.concate = function (a) {
//   const output = [];
//   for (const i of this) {
//     output.push(i);
//   }

//   for (const i of a) {
//     output.push(i);
//   }
//   return output;
// };

// Array.prototype.concate = function (a) {
//   return [...this, ...a];
// };

// console.log(r.concat(arr));
// console.log(arr.concate(r));

const person = {
  firstname: "santhosh",
  lastname: "smart",
  age: 10,
  location: "pondy",
};

// console.log(person);

// console.log(person.firstname);

const { firstname } = person;

console.log(firstname);
// console.log(rest);
// console.log(lastname);
// console.log(age);
