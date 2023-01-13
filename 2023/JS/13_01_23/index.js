// DOM Manipulation
// console.log(window.document.head);
// console.log(window.document.body);
// console.log(window.document.body);

const doc = document;
const h1 = doc.getElementsByTagName("h1")[0].style;
const newH1 = doc.createElement("h1");

// newH1.textContent = "Added new h1 by JavaScript";
newH1.style.textAlign = "center";
newH1.style.color = "blue";
newH1.style.fontSize = "50px";

setInterval(() => {
  //   doc.body.getElementsByTagName("h1")[1].style.textContent =
  //     new Date().getSeconds();

  doc.body.getElementsByTagName(
    "h1"
  )[1].textContent = `${new Date().getHours()} Hrs : ${new Date().getMinutes()} mins : ${new Date().getSeconds()} secs`;
  //   console.log(new Date().getSeconds());
}, 1000);

doc.body.appendChild(newH1);
// console.log(newH1);

// h1.color = "red";
h1.textAlign = "center";

// console.log(h1);
