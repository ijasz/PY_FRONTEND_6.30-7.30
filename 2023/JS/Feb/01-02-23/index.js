const radius = [2, 6, 8];

// function area(r) {
//   let output = [];
//   for (let i = 0; i < r.length; i++) {
//     output.push(Math.PI * (r[i] * r[i]));
//   }
//   return output;
// }

// console.log(area(radius));

// function circumference(r) {
//   let output = [];
//   for (let i = 0; i < r.length; i++) {
//     output.push(2 * Math.PI * r[i]);
//   }
//   return output;
// }

// console.log(circumference(radius));

// function diameter(r) {
//   let output = [];
//   for (let i = 0; i < r.length; i++) {
//     output.push(2 * r[i]);
//   }
//   return output;
// }

// console.log(diameter(radius));

function area(r) {
  return Math.PI * (r * r);
}

function circumference(r) {
  return 2 * Math.PI * r;
}

function diameter(r) {
  return Math.PI * (2 * r);
}

function circle(r, fun) {
  let output = [];
  for (let i = 0; i < r.length; i++) {
    output.push(fun(r[i]));
  }
  return output;
}

console.log(circle(radius, area));
console.log(circle(radius, circumference));
console.log(circle(radius, diameter));
