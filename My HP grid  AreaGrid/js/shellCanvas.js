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

let width = 0
let height = 0
let iteration = 1

let r = 0
let g = 0
let b = 0

function crazyLines () {

    iteration++
    cyclesPerFrame = 100000

    for (let i = 0; i < cyclesPerFrame; ++i) {
        cyclesPerFrame=cyclesPerFrame- 200

        context.strokeStyle = `#303030`
        x = Math.round(Math.random()*width*2)
        y = Math.round(Math.random()*height*2)
        dx = Math.round(Math.random()*innerWidth-width*2)
        dy = Math.round(Math.random()*innerHeight-height*2)

        context.beginPath()
        context.moveTo(x,y)
        context.lineTo(dx,dy)
        context.stroke()
        context.strokeStyle = `rgb(${r+=10},${g},${b})`
        context.fillRect(dx,dy,dx,dy)

    }
    // if (iteration < 600)
        requestAnimationFrame(crazyLines)
}

setTimeout(crazyLines(),0)

}   // end drawScreen wrapper
}   // end onload wrapper