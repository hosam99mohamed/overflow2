let menuButton = document.querySelector(".menu-button");
let navBar = document.querySelector("nav");
let openMenu = document.querySelector(".menu");
let closeMenu = document.querySelector(".close");

menuButton.addEventListener("click", () => {
  if (navBar.classList.contains("open")) {
    navBar.classList.remove("open");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  } else {
    navBar.classList.add("open");
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
});

