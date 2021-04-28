const cl = console.log

window.onload = function () {           // onload wrapper

// elName = document.getElementById("name")

elName = document.getElementsByTagName('div')

cl(elName[0])
cl(elName[1])

elName[0].onmouseover = function () {
    // elName.style.color = "orange"
    elName[1].style.backgroundColor="red"
    elName[1].style.fontSize = "500%"
}

}   // end onload wrapper