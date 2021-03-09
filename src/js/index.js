'use strict';

const Right = document.getElementById("arrowButt-right");
const Left = document.getElementById("arrowButt-left");
// var rightBtn = document.getElementsByClassName("arrow-icon-left");
// var leftBtn = document.getElementsByClassName("arrow-icon-right");

Right.addEventListener("click", goRight);
Left.addEventListener("click", goLeft);

function goRight(){
    document.getElementById("grid-container-left").style.display = "none";
    document.getElementById("grid-container-right").style.display = "grid";
    Right.style.opacity = 0.5;
    Left.style.opacity = 1;
    Right.style.cursor = "no-drop";
    Left.style.cursor = "pointer";
    console.log("success");
}

function goLeft(){
    document.getElementById("grid-container-left").style.display = "grid";
    document.getElementById("grid-container-right").style.display = "none";
    Right.style.opacity = 1;
    Left.style.opacity = 0.5;
    Right.style.cursor = "pointer";
    Left.style.cursor = "no-drop";
    console.log("success");
}
