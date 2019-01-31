var gameState;
var outputArea = document.getElementById("outText");

var input = {
	val : function(){return document.getElementById("input").value;},
	clear : function(){document.getElementById("input").value = "";},
	write : function(text){
		outputArea.innerHTML+="<br>"+text;
		outputArea.scrollTop = outputArea.scrollHeight;
	}
}

function getInput(event){
	var x = event.which || event.keyCode;
	if(x == 13){
		input.write(input.val());
		parseInput();
		input.clear();
	}
}

function parseInput(){
	gameState.run(input.val())
}

function changeRoomImg(imgSrc){
	document.getElementById("roomImg").style.backgroundImage = "url('img/"+imgSrc+".png')";
}

function changePlrImg(imgSrc){
	document.getElementById("plrImg").src = "img/"+imgSrc+".png";
}

function init(){
	gameState = gameEvent.askName;
	gameState.run()
}