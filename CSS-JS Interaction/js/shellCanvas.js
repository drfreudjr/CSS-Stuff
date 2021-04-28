const cl = console.log

window.onload = function () {           // onload wrapper

// elName = document.getElementById("name")

elName = document.getElementsByTagName('div')

cl(elName[0])

elName.onmouseover = function () {
    // elName.style.color = "orange"
    elName.style.backgroundColor="red"
    elName.style.fontSize = "500%"
}

}   // end onload wrapper