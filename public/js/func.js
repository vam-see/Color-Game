/*
JS file for ColorGame
*/

var newgamediv = document.querySelector("#newgame");
var easygamediv = document.querySelector("#easygame");
var hardgamediv = document.querySelector("#hardgame");
var selDivs = document.querySelectorAll(".box");
var gameMode = 1;
var currentColor;
var headfoot = document.querySelectorAll(".headfoot");

newgamediv.addEventListener("click", funcNewGame);
easygamediv.addEventListener("click", changeGameMode);
hardgamediv.addEventListener("click", changeGameMode);
hardgamediv.classList.add("buttonselect");

for(i = 0; i < selDivs.length; i++){
	selDivs[i].addEventListener("click", getDivColor);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeGameMode(){
		if(event.target.id == hardgamediv.id){
			gameMode = 1;
			funcNewGame();
			
			easygamediv.classList.remove("buttonselect");
			hardgamediv.classList.add("buttonselect");
			
			document.querySelector("#four").classList.remove("boxhide");
			document.querySelector("#five").classList.remove("boxhide");
			document.querySelector("#six").classList.remove("boxhide");
		}
		else if(event.target.id == easygamediv.id){
			gameMode = 0;
			funcNewGame();
			
			easygamediv.classList.add("buttonselect");
			hardgamediv.classList.remove("buttonselect");
			
			document.querySelector("#four").classList.add("boxhide");
			document.querySelector("#five").classList.add("boxhide");
			document.querySelector("#six").classList.add("boxhide");
		}
}

function funcNewGame(){
	
	headfoot[0].style.backgroundColor = "black";
	headfoot[1].style.backgroundColor = "black";
	
	var colorSamples = [];
	if	(gameMode == 0){
		for(i = 0; i < 3; i++){
			colorSamples[i] = getRandomColor();		
		}
		document.querySelector("#one").style.backgroundColor = colorSamples[0];
		document.querySelector("#two").style.backgroundColor = colorSamples[1];
		document.querySelector("#three").style.backgroundColor = colorSamples[2];
		
		document.querySelector("#one").classList.remove("boxfade");
		document.querySelector("#two").classList.remove("boxfade");
		document.querySelector("#three").classList.remove("boxfade");
		
		
		currentColor = colorSamples[Math.floor(Math.random() * 3)];
		document.querySelector("#rgbValue").innerHTML = getRGB(currentColor);
	}
	else{
		for(i = 0; i < 6; i++){
			colorSamples[i] = getRandomColor();		
		}
		document.querySelector("#one").style.backgroundColor = colorSamples[0];
		document.querySelector("#two").style.backgroundColor = colorSamples[1];
		document.querySelector("#three").style.backgroundColor = colorSamples[2];
		document.querySelector("#four").style.backgroundColor = colorSamples[3];
		document.querySelector("#five").style.backgroundColor = colorSamples[4];
		document.querySelector("#six").style.backgroundColor = colorSamples[5];
		
		document.querySelector("#one").classList.remove("boxfade");
		document.querySelector("#two").classList.remove("boxfade");
		document.querySelector("#three").classList.remove("boxfade");
		document.querySelector("#four").classList.remove("boxfade");
		document.querySelector("#five").classList.remove("boxfade");
		document.querySelector("#six").classList.remove("boxfade");
		
		currentColor = colorSamples[Math.floor(Math.random() * 6)];
		document.querySelector("#rgbValue").innerHTML = getRGB(currentColor);
	}
}

function getRGB(hexValue){
	
	hexValue = hexValue.replace('#', '');
	var r = parseInt(hexValue.substring(0,2), 16);
	var g = parseInt(hexValue.substring(2,4), 16);
	var b = parseInt(hexValue.substring(4,6), 16);
	return(r + ", " + g + ", " + b);
}

function getDivColor(){
	console.log(event.target.style.backgroundColor);
	console.log("rgb("+getRGB(currentColor)+")");
	if(event.target.style.backgroundColor == "rgb("+getRGB(currentColor)+")"){
		headfoot[0].style.backgroundColor = currentColor;
		headfoot[1].style.backgroundColor = currentColor;
		alert("You WIN! Cheers! (_)3");
	}
	else{
		event.target.classList.add("boxfade");
	}
}