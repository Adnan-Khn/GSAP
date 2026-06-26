let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove",(e)=>{
  //console.log(e.x,e.y)
  gsap.to(cursor,{
    x:e.x,
    y:e.y,
    ease: "back.out",
    duration: 1.5,
    opacity: 0.4
  })
})

imageDiv.addEventListener("mouseenter",()=>{
  gsap.to(cursor,{
    scale: 4
  })
  cursor.innerHTML = "View More"
})
imageDiv.addEventListener("mouseleave",()=>{
  gsap.to(cursor,{
    scale: 1
  })
  cursor.innerHTML = ""
})