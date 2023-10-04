const body = document.querySelector('body');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const a = document.querySelector('#a'); //rgba


function setColor() {
    //rgb(0, 255, 25)
    //rgba(0, 255, 34, 0-1)

    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const aVal = a.value / 100;

    const rgbaColor = `rgb(${redVal}, ${greenVal}, ${blueVal}, ${aVal})`;
    body.style.background = rgbaColor;
}

setColor();

red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
a.addEventListener('input', setColor);

