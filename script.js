var button = document.querySelector("button");
var box = document.getElementById("ChangeMe");

function ChangeColor() {
if (box.style.background == "rgb(0, 0, 255)"){

  box.style.background = "rgb(13, 27, 42)";

 }else {

box.style.background = "rgb(0, 0, 255)";
 }
}