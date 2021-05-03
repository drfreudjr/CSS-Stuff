const cl = console.log

window.onload = function () {           // onload wrapper

let elContainer = document.getElementsByClassName("container")
cl(elContainer[0])

elContainer[0].style.gridTemplateAreas = "'n n n m m m m m' 'r r t t c c g g' 'f f f f f f f f'"

}   // end onload wrapper
