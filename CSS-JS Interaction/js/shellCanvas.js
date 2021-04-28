const cl = console.log

window.onload = function () {           // onload wrapper

// elName = document.getElementById("name")

elName = document.getElementsByTagName('div')

cl(elName[0])
cl(elName[1])

let sz = "500%"

elName[0].onmouseover = function () {
    elName[0].style.color = "orange"
    elName[1].style.backgroundColor="red"
    elName[1].style.fontSize = sz
}

}   // end onload wrapper