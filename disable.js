"use strict";
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentArray = 0;
let myFunction = ()=>{
document.getElementById("demo").innerHTML=array[currentArray];
currentArray=(currentArray+1)%array.length;
}
document.querySelector("#disable").addEventListener("click",()=>{
	document.querySelector("#cool").disabled=true;
});
document.querySelector("#enable").addEventListener("click",()=>{
	document.querySelector("#cool").disabled=false;
});