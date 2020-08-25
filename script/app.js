const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".header-list");
const headerLink = document.querySelector(".header__link");
const headerNav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  headerList.classList.toggle("links-active");
  headerNav.classList.toggle("nav-active");
  headerLink.classList.toggle("blue-link");
});
