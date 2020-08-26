const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".header-list");
const headerLink = document.querySelector(".header__link");
const headerNav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  headerList.classList.toggle("links-active");
  hamburger.classList.toggle("active-ham");
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

tlThird.fromTo(".testimonial__describtion", {x:-800,},{x:0, duration:1.5,delay:.5})
tlThird.fromTo(".testimonial__photo", {x:-800},{x:0, duration:1.5},"-=.5")
tlThird.fromTo(".testimonial__quote", {x:800},{x:0, duration:1.5},"-=.5")


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



//Cursor animation
const mouseCursor = document.querySelector('#cursor');
const links = document.querySelectorAll('a');
console.log(links);
const cursor = (e)=>{
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left= e.pageX + 'px';

}

links.forEach(link=>{
  link.addEventListener('mouseover',()=>{
    mouseCursor.classList.add('grow')
  })

  link.addEventListener('mouseleave',()=>{
    mouseCursor.classList.remove('grow')
  })
})



window.addEventListener('mousemove',cursor);