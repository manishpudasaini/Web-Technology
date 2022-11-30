let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

//First path
context.beginPath();
context.strokeStyle = "blue"; //change context property
context.moveTo(0, 0); //set the starting x y coordinate
context.lineTo(700, 300); //set the ending x,y coordinate
context.stroke();

//Second Path
context.beginPath();
context.strokeStyle="green";
context.moveTo(0,120);
context.lineTo(300,130);
context.stroke();

//create the element
//target the element
//set the context
//set begin line
//set end line
//begin drawinh

var c =document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);    //arc(x,y,radius,startAngle,endAngle,conterlockwise)
ctx.stroke();