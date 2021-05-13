function handleClick(){
	var buttonInnerHTML = this.innerHTML;
	executeSwitch(buttonInnerHTML);
	addAnimation(buttonInnerHTML);
}

function addAnimation(buttonInnerHTML)
{
	var activeButton = '.'+ buttonInnerHTML;
	document.querySelector(activeButton).classList.add("btn-animate");
	window.setTimeout(function(){
		document.querySelector(activeButton).classList.remove("btn-animate");
	}, 500);
}

	// var audio = new Audio("sounds/tom-1.mp3");
	// audio.play();
	// alert("click");

for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}


//Detect Keyboard Press
document.addEventListener("keypress", function(event){
	executeSwitch(event.key);
	addAnimation(event.key);
});

function executeSwitch(c){

	switch(c){
		case "w" :  var audio = new Audio("sounds/tom-4.mp3");
					audio.play();
					break;
		case "s" :  var audio = new Audio("sounds/tom-3.mp3");
					audio.play();
					break;
		case "a" :  var audio = new Audio("sounds/tom-1.mp3");
					audio.play();
					break;
		case "d" :  var audio = new Audio("sounds/tom-2.mp3");
					audio.play();
					break;
		case "k" :  var audio = new Audio("sounds/snare.mp3");
					audio.play();
					break;
		case "j" :  var audio = new Audio("sounds/crash.mp3");
					audio.play();
					break;
		case "l" :  var audio = new Audio("sounds/kick-bass.mp3");
					audio.play();
					break;
		default: break;
	}

}

document.querySelector