var name = prompt("enter your name");
alert("Hello " + name + " welcome to pavan's world!");

var randomnumgen1 = Math.floor(Math.random() * 2) + 1;
var imginsertion = "images/toss" + randomnumgen1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imginsertion);

if(randomnumgen1 === 1){
  document.querySelector("h1").innerHTML = "Results";
  document.querySelector("h2").innerHTML = "HEADS";
}
else{
  document.querySelector("h1").innerHTML = "Results"
  document.querySelector("h2").innerHTML = "TAILS";
}
