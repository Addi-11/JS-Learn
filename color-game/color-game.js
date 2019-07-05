var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName('square');
var colorDisplay = document.getElementById("colorVal");
var message = document.querySelector("#message"); 
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init();

function init(){
	//mode button event listener
	setModeBtn();
	//GAME PLAY
	setUpSquares();
	reset();
}

function setModeBtn(){
	for(var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click",function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners 
		squares[i].addEventListener("click", function(){
			//grab color of picked square
			console.log(this);
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent = "Correct!! You won!";
				changeColor(clickedColor);
				resetBtn.textContent = "Play Again?";
				message.style.color = "green";
	
			} else{
				this.style.backgroundColor = '#232323';
				message.textContent = "Try Again!!";
				message.style.color = "red";
			}
		})
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random color from the array
	pickedColor = pickColor();
	//change the display to match picked color
	colorDisplay.textContent = pickedColor;
	reset.textContent = "New Colors";
	message.textContent = " ";
	//change color of the squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click",function(){
	reset();
})

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