var canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var colors = [
	"#50312f",
	"#cb0000",
	"#e4ea8c",
	"#3f6c45"
];

//utility functions
function generateInt(st,end){
	return Math.random()*end + st;
}

function generateColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

var gravity = 0.2;
var friction = 0.98;
var circleArr = [];

//reset the animation
window.addEventListener("click", function(){
	init();
})

window.addEventListener("resize",function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
})


function init(){
	circleArr = [];
	//creating array of circles
	for(var i = 0; i < 100; i++){
		var circle = {
			radius: generateInt(8,40),
			y: generateInt(0,innerHeight-40),
			x: generateInt(0,innerWidth),
			dy: generateInt(0,3),
			dx: generateInt(0,0),
			color: generateColor()
		};
		circleArr.push(circle);
	}
}


function drawCircle(x,y,dy,dx,radius,color){
	c.beginPath();
	c.arc(x,y,radius, 0, 2 * Math.PI);
	c.stroke();
	c.fillStyle = color;
	c.fill();
	
}

function update(){
	for(var i = 0; i < circleArr.length; i++){
		//draw circles
		drawCircle(circleArr[i].x,circleArr[i].y,circleArr[i].dy,circleArr[i].dx,circleArr[i].radius,circleArr[i].color);
		//apply gravity to the circles
		if(circleArr[i].radius  + circleArr[i].y + circleArr[i].dy > innerHeight){
			circleArr[i].dy = -circleArr[i].dy*friction;
		} else{
			circleArr[i].dy += gravity;
		}	
		circleArr[i].y += circleArr[i].dy;
	}
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	update();
}
init();
animate();