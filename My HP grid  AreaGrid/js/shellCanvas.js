const cl = console.log

window.onload = function () {           // onload wrapper

// ------- Overall Layout ---------- //

let elGridContainer = document.getElementsByClassName("grid-container")

elGridContainer[0].style.gridTemplateAreas =    `'n n n n n n m m m m m p g g g g' 
                                                 'c c c c r r r r t t t t g g g g' 
                                                 'f f f f f f f f f f f f g g g g'`
// // ----- Graphics Pane ---- //

window.addEventListener("resize", sizeCanvas); 
sizeCanvas()                            // create initial canvas

    function sizeCanvas () {                // Create or resize 

        cl('here')
        if (canvas === undefined) {         
            canvas = createCanvas();        
        }

        function createCanvas () {   
            const canvas = document.createElement("canvas"); 
            canvas.style.position = "absolute"; 
            canvas.style.left     = "0px";      
            canvas.style.top      = "0px";

            document.body.appendChild(canvas);  // Add to document
            context = canvas.getContext("2d");  
            return canvas;
        }

        canvas.width  = window.innerWidth; 
        canvas.height = window.innerHeight;    
    }

// drawScreen()

function drawScreen() {  // wrapper that gets called on resize events
    //  //  // Enter Page Specific Code here

// test()
// function test() {
//     context.strokeStyle  = "blue"
//     context.lineWidth  = 1
//     context.lineCap  = 'square'
//     context.beginPath()
//     context.moveTo(0, 0)
//     context.lineTo(width, height)
//     // context.lineTo(100, 50)
//     context.stroke()
//     // context.closePath();
// }


}   // end drawScreen wrapper

}   // end onload wrapper