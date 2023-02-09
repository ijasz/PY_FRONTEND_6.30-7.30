window.localStorage.setItem("name", "something");
console.log(window.localStorage.getItem("name"));
window.localStorage.removeItem("name");

function login() {
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;

  console.log(username);
  console.log(password);
  if (password === "123" && username === "a") {
    const home = document.querySelector(".home");
    home.style.display = "block";
    window.localStorage.setItem("name", username);
    home.innerHTML = `<p>Hey ${username} You are logged in</p>`;
  } else {
    alert("sorry credential invalid");
  }
}

function logout() {
  const home = document.querySelector(".home");
  window.localStorage.removeItem("name");
  home.style.display = "none";
}
