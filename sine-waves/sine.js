var canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var amp = 50;
var length = 0.01;
var freq = 0.1


function animate(){
	requestAnimationFrame(animate);
	c.fillStyle = 'rgba(0,0,0,0.01)';
	c.fillRect(0,0,canvas.width,canvas.height);
	c.beginPath();
	c.moveTo(0,canvas.height / 2);

	//to make all pixels editable
	for(var i = 0; i < canvas.width; i++){
		c.lineTo(i,canvas.height/2 + Math.sin(i * length + freq)*amp);
	}

	c.strokeStyle = 'hsl(0, 50%, 50%)';
	c.stroke();

	freq += 0.01;
	length += 0.00002;
	if(amp >= 50 && amp < 150){
		amp += 2;
	}
	
}
animate();