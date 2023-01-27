const doc = document;

function decreament() {
  const display = doc.querySelector(".display");
  if (display.textContent >= 1) {
    display.textContent = parseInt(display.textContent) - 1;
  }
  console.log("--", display.textContent);
}

function increament() {
  const display = doc.querySelector(".display");
  display.textContent = parseInt(display.textContent) + 1;
  console.log("++", display.textContent);
}

function reset() {
  const display = doc.querySelector(".display");
  display.textContent = 0;
  console.log("reset", display.textContent);
}

const myfunc = (e) => {
  const display = doc.querySelector(".display");
  switch (e.name) {
    case "increament":
      display.textContent = parseInt(display.textContent) + 1;
      break;

    case "decreament":
      if (display.textContent >= 1)
        display.textContent = parseInt(display.textContent) - 1;

      break;

    default:
      display.textContent = 0;
      break;
  }
  console.log(e.name);
};
