'use strict';

const Right = document.getElementById("arrowButt-right");
const Left = document.getElementById("arrowButt-left");
var x = 0;

Right.addEventListener("click", goRight);
Left.addEventListener("click", goLeft);

function goRight(){
    if  (x == 0){
        document.getElementById("grid-container-left").style.display = "none";
        document.getElementById("grid-container-right").style.display = "grid";
        Right.style.opacity = 0.5;
        Left.style.opacity = 1;
        Right.style.cursor = "no-drop";
        Left.style.cursor = "pointer";
        document.location = "#products";
        console.log("success");
        x = 1;
    }
    else{
        console.log("error");
    }

}

function goLeft(){
    if (x == 1) {
        document.getElementById("grid-container-left").style.display = "grid";
        document.getElementById("grid-container-right").style.display = "none";
        Right.style.opacity = 1;
        Left.style.opacity = 0.5;
        Right.style.cursor = "pointer";
        Left.style.cursor = "no-drop";
        document.location = "#products";
        console.log("success");
        x = 0;
    }
    else{
        console.log("error");
    }


}
