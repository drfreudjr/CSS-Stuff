const cl = console.log

// -------Layout ---------- //

window.onload = function () {           // onload wrapper

    let elGridContainer = document.getElementsByClassName("grid-container")
    elGridContainer[0].style.gridTemplateAreas =    `'n n n m m m g g' 
                                                     'r r t t c c g g' 
                                                     'f f f f f f f f'`

// ----- Graphics Pane ---- //

let elCanvas = document.getElementById('canvas')
// context = canvas.getContext("2d");  




}   // end onload wrapper

