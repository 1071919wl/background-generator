var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var random = document.querySelector("button");

function setGradient(){
  body.style.background =
    "linear-gradient(to right, "
    +color1.value
    +", "
    +color2.value
    + ")";
    css.textContent = body.style.background + ";";
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// Random gradient generator
random.onclick = function(event){
  body.style.background =
    "linear-gradient(to right, "
    + random_bg_color()
    +", "
    + random_bg_color()
    + ")";
    css.textContent = body.style.background + ";";
};

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 return bgColor;
};
