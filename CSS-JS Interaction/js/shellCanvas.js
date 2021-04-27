const cl = console.log

window.onload = function () {           // onload wrapper

elName = document.getElementById("name")

cl(elName)

elName.onmouseover = function () {
    // elName.style.color = "orange"
    elName.style.backgroundColor="red"
    elName.style.fontSize = "500%"
}

// elName.style.color = "orange"


 
}   // end onload wrapper