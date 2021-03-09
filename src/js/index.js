'use strict';

const Right = document.getElementById("arrowButt-right");
const Left = document.getElementById("arrowButt-left");

Right.addEventListener("click", goRight);
Left.addEventListener("click", goLeft);

function goRight(){
    document.getElementById("grid-container-left").style.display = "none";
    document.getElementById("grid-container-right").style.display = "grid";
    console.log("success");
}

function goLeft(){
    document.getElementById("grid-container-left").style.display = "grid";
    document.getElementById("grid-container-right").style.display = "none";
    console.log("success");
}
