// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//     // break
//   }
//   console.log(i);
// }

// const day = new Date().getDay();

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   case 4:
//     console.log("Thursday");
//     break;

//   case 5:
//     console.log("Friday");
//     break;

//   case 6:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("Sunday");
// }

// Ternary operator ?

// const age = 18;
// const a = age >= 18 ? "eligible for voting" : "not eligible for voting";

// Object with Functions

// const person = {
//   firstname: "Brendan",
//   lastname: "Eich",
//   getName() {
//     return this.firstname + " " + this.lastname;
//   },
// };

// Factory Func

function person(firstname, lastname) {
  return {
    firstname: firstname,
    lastname: lastname,
    getName() {
      return this.firstname + " " + this.lastname;
    },
    updateName(first, last) {
      this.firstname = first;
      this.lastname = last;
    },
  };
}

const obj1 = person("Brendan", "Eich");
const obj2 = person("John", "Smith");

console.log(obj1);
console.log(obj2);

// Destructuring => ES6 = 2015
