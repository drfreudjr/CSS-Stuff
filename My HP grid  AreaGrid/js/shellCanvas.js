const cl = console.log

window.onload = function () {           // onload wrapper

// ------- Overall Layout ---------- //
let elGridContainer = document.getElementsByClassName("grid-container")

elGridContainer[0].style.gridTemplateAreas =    `'n n n n n n m m m m m p g g g g' 
                                                     'c c c c r r r r t t t t g g g g' 
                                                     'f f f f f f f f f f f f g g g g'`

// ----- Graphics Pane ---- //

let elCanvas = document.getElementById('canvas')
let context = canvas.getContext("2d");  
let box = getComputedStyle(elCanvas)

drawScreen()

function drawScreen() {  // wrapper that gets called on resize events
    //  //  // Enter Page Specific Code here

// let width = elCanvas.clientWidth    // trying to figure out scroll border
// let height = elCanvas.clientHeight

let width = elCanvas.offsetWidth-30
let height = elCanvas.offsetHeight

cl(width, height)

test()
function test() {
    context.strokeStyle  = "yellow"
    context.lineWidth  = 10
    context.lineCap  = 'square'
    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(width, 0)
    context.lineTo(width,height)
    context.lineTo(0,height)
    context.stroke()
    context.closePath();
}


}   // end drawScreen wrapper

}   // end onload wrapper