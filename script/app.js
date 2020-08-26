const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".header-list");
const headerLink = document.querySelector(".header__link");
const headerNav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  headerList.classList.toggle("links-active");
  headerNav.classList.toggle("nav-active");
  headerLink.classList.toggle("blue-link");
});

// First animation
let tlFirst = gsap.timeline({
  scrollTrigger:{
    trigger:".healthcare",
    start:"center bottom "
  }
})

tlFirst.from(".healthcare__logo", {y:0, opacity:0, duration:1.5})
tlFirst.from(".healthcare__info", {y:0, opacity:0, duration:1.5},"-=1")

// Second animation
let tlSecond = gsap.timeline({
  scrollTrigger:{
    trigger:".media",
    start:"center bottom "
  }
})

tlFirst.from(".media__logo", {y:0, opacity:0, duration:1.5})
tlFirst.from(".media__info", {y:0, opacity:0, duration:1.5},"-=1")

// Third animation


let tlThird = gsap.timeline({
  scrollTrigger:{
    trigger:".testimonial",
    start:"center bottom ",
  }
})

tlThird.fromTo(".testimonial", {y:0, rotation:180},{rotation:0, duration:1.5})


// Forth animation
let tlForth = gsap.timeline({
  scrollTrigger:{
    trigger:".treatment",
    start:"center bottom "
  }
})

tlForth.from(".box--1", {x:-1000, opacity:0, duration:1.5})
tlForth.from(".box--2", {x:-1000, opacity:0, duration:1.5},"-=1")
tlForth.from(".box--3", {x:-1000,  opacity:0, duration:1.5},"-=1.5")


gsap.fromTo(".main__left", {opacity: 0,x:-1000}, {opacity: 1, duration: 1,x:0});
gsap.fromTo(".main__right", {opacity: 0,x:2000}, {opacity: 1, duration: 1,x:0});



gsap.from('.services__box',
{
  scrollTrigger:{
    trigger:".services__box",
    start:"center bottom"
  },
  x:-1000,
  duration:1.5,
})
