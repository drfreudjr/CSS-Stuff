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

function randomDots () {

    x = Math.floor(math.Random()*width)
    y = Math.floor(math.Random()*height)
        requestAnimationFrame(crazyLines)
}


}   // end drawScreen wrapper
}   // end onload wrapper