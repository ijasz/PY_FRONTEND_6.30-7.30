// const obj1 = {
//   name: "xxx",
//   age: 10,
// };

// const obj2 = {
//   name: "xxx",
//   age: 10,
// };

// function getName(location) {
//   return this.name + ` and am live in ${location}`;
// }

// console.log(getName.call(obj1, "pondy"));
// console.log(getName.apply(obj2, ["pondy"]));

const doc = document;

// console.log(doc.getElementsByClassName("text"));
// console.log(doc.getElementById("text1"));
// console.log(doc.getElementsByTagName("h1"));
// console.log(doc.getElementsByName("textname"));
// console.log(doc.querySelector("body > .text"));
// console.log(doc.querySelector("body > #text1"));
// console.log(doc.querySelector("#text1"));
// console.log(doc.querySelectorAll("#text1"));

// // console.log(doc.querySelectorAll("#text1")[0].getAttribute("new"));

// console.log(window.innerWidth);
// console.log(window.innerHeight);

const btn = doc.querySelector("button");

btn.addEventListener("click", function () {
  console.log("clicked");
});
