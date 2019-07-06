var ham = document.querySelector(".icon");

ham.addEventListener("click", function(){
	clickedHam();
});

function clickedHam(){
	var change = document.getElementsByClassName("hamburger");
	change.classList.remove("hamburger");
	change.classList.add(".clicked-ham");
	if(change.contains(".hamburger")){
		change.classList.toggle(".hamburger");
	}
}