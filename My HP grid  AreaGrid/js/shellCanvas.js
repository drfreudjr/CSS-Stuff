const cl = console.log

// -------Layout ---------- //

window.onload = function () {           // onload wrapper

    let elGridContainer = document.getElementsByClassName("grid-container")
    elGridContainer[0].style.gridTemplateAreas =    `'n n n m m m g g' 
                                                     'r r t t c c g g' 
                                                     'f f f f f f f f'`

// ----- Graphics Pane ---- //

let elCanvas = document.getElementById('canvas')
let context = canvas.getContext("2d");  

let width, height

width = canvas.clientWidth
height = canvas.clientHeight

cl(width,height)

context.fillStyle="brown"
// context.fillRect(0, 0, window.innerWidth, window.innerHeight)
context.fillRect(0,0, width, height)

// should i use innerWidth or ClientWidth? //

}   // end onload wrapper

