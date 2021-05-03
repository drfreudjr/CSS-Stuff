const cl = console.log

window.onload = function () {           // onload wrapper

let elGridContainer = document.getElementsByClassName("grid-container")
cl(elGridContainer[0])

elGridContainer[0].style.gridTemplateAreas = "'n n m m m m m m' 'r r t t c c g g' 'f f f f f f f f'"

}   // end onload wrapper
