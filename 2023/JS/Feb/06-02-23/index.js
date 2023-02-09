Array.prototype.myMap = function (fun) {
  for (let i = 0; i < this.length; i++) {
    fun(this[i], i);
  }
};
// const a = {
//   fname: "santhosh",
//   lname: "smart",
//   age: 10,
// };

// const b = {
//     fname: "pravin",
//     lname: "j",
//     age: 10,
//   };

//   const c = {
//     fname: "xxx",
//     lname: "yy",
//     age: 10,
//   };

const json = [
  {
    fname: "santhosh",
    lname: "smart",
    age: 10,
  },
  {
    fname: "pravin",
    lname: "j",
    age: 10,
  },
  {
    fname: "xxx",
    lname: "yy",
    age: 10,
  },
];

const updatedJSON = [];

function fullName(location, area) {
  return this.fname + " " + this.lname + " i am in " + location + "," + area;
}

json.myMap(function (data, i) {
  const item = {
    ...data,
    fullName: fullName.bind(data, "cuddalore", "postoffice"),
  };

  updatedJSON.push(item);
});

updatedJSON.myMap(function (data, i) {
  console.log(data.fullName());
});

// const a = {
//   fname: "santhosh",
//   lname: "smart",
//   age: 10,
// };

// const { fname, ...r } = a;
// console.log(fname);
// console.log(r);

// const b = { ...a };

// b.fname = "dugg";

// const c = [2, 4, 6];

// const d = [1, ...c];

// const [f, g, ...rest] = d;
// console.log(f);
// console.log(g);
// console.log(rest);

// console.log(d);

// const person1 = fullName.bind(a, "cuddalore", "postoffice");
// const person2 = fullName.bind(b, "cuddalore", "postoffice");
// const person3 = fullName.bind(c, "cuddalore", "postoffice");

// console.log(fullName.call(a, "pondy", "saram"));
// console.log(fullName.call(b, "cuddalore", "postoffice"));
// console.log(fullName.call(c, "cuddalore", "postoffice"));

// console.log(person1());
// console.log(person2());
// console.log(person3());
// console.log(fullName.bind(a, "cuddalore", "postoffice"));

// let arr = [person1, person2, person3];

// arr.map(function (data, index) {
//   console.log(data, index);
// });

// arr.myMap(function (data, index) {
//   console.log(data());
// });

// console.log(fullName("kcjgh", "fkjgjy"));
