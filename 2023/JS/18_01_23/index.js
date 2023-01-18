const doc = document;

for (let i = 1; i <= 5; i++) {
  let row = doc.createElement("main");
  row.className = "row";
  for (let j = 1; j <= 5; j++) {
    let elements = doc.createElement("div");
    elements.className = "element";
    elements.textContent = j;
    row.appendChild(elements);
  }
  console.log(row);
  doc.body.appendChild(row);
}

// for (let i = 10; i >= 0; --i) {
//   console.log(i);
// }
