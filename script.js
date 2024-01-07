//your JS code here. If required.
let rotationAngle = 0;

const rotatingElement = document.getElementById('line');

function rotateElement(){
	rotationAngle += 2;
	rotatingElement.style.transform = `rotate(${rotationAngle}deg)`;
}

setInterval(rotateElement, 20);