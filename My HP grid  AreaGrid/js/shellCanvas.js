const cl = console.log

// ------- Overall Layout ---------- //

window.onload = function () {           // onload wrapper

    let elGridContainer = document.getElementsByClassName("grid-container")
    elGridContainer[0].style.gridTemplateAreas =    `'n n n m m m g g' 
                                                     'r r t t c c g g' 
                                                     'f f f f f f f f'`

// ----- Graphics Pane ---- //

let elCanvas = document.getElementById('canvas')
let context = canvas.getContext("2d");  

drawScreen()

function drawScreen() {  // wrapper that gets called on resize event
    //  //  // Enter Page Specific Code here

let width = innerWidth
let height = innerHeight

let r,b,g = 0
let x,y = 0

function crazyLines () {

    if (r<255) r+=.1

    context.strokeStyle = `rgb(${r},${g},${b})`
    x = Math.round(Math.random()*width)
    y = Math.round(Math.random()*height)
    dx = Math.round(Math.random()*width)
    dy = Math.round(Math.random()*height)

    context.beginPath()
    context.moveTo(x,y)
    context.lineTo(dx,dy)
    context.stroke()

    requestAnimationFrame(crazyLines)
}

crazyLines()


}   // end drawScreen wrapper
}   // end onload wrapper