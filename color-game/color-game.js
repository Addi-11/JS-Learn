var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.getElementsByClassName('square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorVal");
var message = document.querySelector("#message"); 
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else
			squares[i].style.display = "none";
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

reset.addEventListener("click",function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	document.querySelector("#reset").textContent = "New Colors";
	message.textContent = " ";
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		console.log(this);
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor);
		console.log(pickedColor);
		if(clickedColor === pickedColor){
			message.textContent = "Correct!! You won";
			changeColor(clickedColor);
			document.querySelector("#reset").textContent = "Play Again?";
			message.style.color = "green";

		} else{
			this.style.backgroundColor = '#232323';
			message.textContent = "Try Again!!";
			message.style.color = "red";
		}
	})
}


function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	document.querySelector("h1").style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var color = "rgb("+ r +", " + g + ", " + b + ")";
	return color;
}