const doc = window.document;

const hr = doc.querySelector(".hr");
const min = doc.querySelector(".min");
const sec = doc.querySelector(".sec");

console.log(hr, min, sec);

window.setInterval(function () {
  const date = new Date();
  const secTime = new Date().getSeconds();
  const minTime = new Date().getMinutes();
  const hrTime = new Date().getHours() / 12;
  sec.style.rotate = `${secTime * 6}deg`;
  min.style.rotate = `${minTime * 6}deg`;
  hr.style.rotate = `${hrTime * 12}deg`;
  console.log("call", sec);
}, 1000);
