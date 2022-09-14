let bxToggleRight = document.querySelector(".bx-toggle-right");
let bxToggleLeft = document.querySelector(".bx-toggle-left");
let pOne = document.querySelector(".p-one");
let pTwo = document.querySelector(".p-two");

let formLogin = document.getElementById("form-login")
let submitLogin = document.getElementById("sub")
let username = document.getElementById("Username");
let Phone = document.getElementById("Phone");

bxToggleRight.addEventListener("click", function () {
  bxToggleRight.style.visibility = "hidden";
  bxToggleLeft.style.visibility = "visible";
  pOne.style.color = "#004AAD";
  pTwo.style.color = "black";
});

bxToggleLeft.addEventListener("click", function () {
  bxToggleLeft.style.visibility = "hidden";
  bxToggleRight.style.visibility = "visible";
  pTwo.style.color = "#004AAD";
  pOne.style.color = "black";
});

pOne.addEventListener("click", function () {
  bxToggleRight.style.visibility = "hidden";
  bxToggleLeft.style.visibility = "visible";
  pOne.style.color = "#004AAD";
  pTwo.style.color = "black";
});

pTwo.addEventListener("click", function () {
  bxToggleLeft.style.visibility = "hidden";
  bxToggleRight.style.visibility = "visible";
  pTwo.style.color = "#004AAD";
  pOne.style.color = "black";
});

// ^^^^^^^^^^^^^^^^^

// formLogin.addEventListener("click" ,(e) => {
//   e.preventDefault();
// })

submitLogin.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  if (username.value === "" || Phone.value === "") {
    alert("data is empty");
  } else  {
      window.location = "index.html";
    }
  }
