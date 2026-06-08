var button = document.querySelector("button");
var box = document.getElementById("ChangeMe");

function ChangeColor() {
if (box.style.background == "rgb(255, 255, 255)"){

  box.style.background = "rgb(13, 27, 42)";

 }else {

box.style.background = "rgb(121, 179, 255)";
 }
}