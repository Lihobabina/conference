let menuBtn = document.querySelector("#menu-btn");
let menu = document.querySelector("#menu");
let closeMenuBtn = document.querySelector("#close-menu");
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.add("menu-active");
});
closeMenuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.remove("menu-active");
});
