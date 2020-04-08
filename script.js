var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
	 "linear-gradient(to right, "
	  + color1.value 
	  + ", " 
	  + color2.value 
	  +")";

	  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient); 
	
color2.addEventListener("input", setGradient); 

//new code

//background color matches the input on first page load
body.style.background ="linear-gradient(to right, "
	  + color1.value 
	  + ", " 
	  + color2.value 
	  +")";

//Display initial CSS linear gradient property
css.textContent = body.style.background + ";";

//creating randomizing button
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var newcolor = '#';
  for (var i = 0; i < 6; i++) {
    newcolor += letters[Math.floor(Math.random() * 16)];
  }
  return newcolor;
}
function randomize(){
	
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();

}

var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Randomize!"));
 		body.appendChild(btn);
 		btn.addEventListener("click", randomize);






