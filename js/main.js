
console.log('drawing js linked')

let body = document.querySelector("body")
let main = document.querySelector("main")
let isMousedown = false


body.addEventListener("mousemove", (event) => {
  let box = document.querySelector(".green-box")
  box.style.top = `${event.y}px`
  box.style.left = `${event.x}px`
  if(isMousedown){
    drawBox(event.x, event.y)
  }

})


body.addEventListener("mousedown", (event) => {
  console.log("mousedown")
  isMousedown = true
})

body.addEventListener("mouseup", (event) => {
  console.log("mouseup")
  isMousedown = false
})

const drawBox = () => {
  let newBox = `<div class="blue-box"
    style="top: ${event.y}px; left: ${event.x}px;"
  ></div>`

  main.innerHTML +=  newBox
}