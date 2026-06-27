let menuIcon = document.querySelector("#menuIcon");
let closeIcon = document.querySelector("#closeIcon");
let sidebar = document.querySelector("#sidebar");

let tl = gsap.timeline({paused:true});

tl.to("#sidebar", {
  right: 0,
  duration: 0.4,
});
tl.from("#sidebar h4", {
  x: 200,
  stagger: 0.2,
  duration: 0.4,
  opacity: 0,
});
tl.to(closeIcon, {
  opacity: 1,
  duration: 0.2,
}, "-=0.2");

menuIcon.addEventListener("click", () => {
  tl.play();
});
closeIcon.addEventListener("click", () => {
  console.log("clicked");
  tl.reverse();
});
