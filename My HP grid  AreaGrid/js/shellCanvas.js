const cl = console.log

// -------Begin Layout ---------- //

window.onload = function () {           // onload wrapper

let elGridContainer = document.getElementsByClassName("grid-container")
// cl(elGridContainer[0])

elGridContainer[0].style.gridTemplateAreas = "'n n n m m m g g' 'r r t t c c g g' 'f f f f f f f f'"

}   // end onload wrapper

// ------End Layout ---------- //
