var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randomButton = document.querySelector('button');


function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

function randomColors(){
    color1.value = getRandomColor()
    color2.value = getRandomColor();
    setGradient();
}


setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors)


// Andrei New Syntax Way
// const css = document.querySelector('h3');
// const [color1, color2] = document.querySelectorAll('.color')
// const body = document.querySelector('#gradient');

// setGradient = () => {
// 	body.style.background = _linearGradient();
// 	css.textContent = `${body.style.background};`;
// }


// _linearGradient = () => {
// 	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
// }

// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);