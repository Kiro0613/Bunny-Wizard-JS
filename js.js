var gameState;
var yesList = ["y", "yes", "1"];
var noList = ["n", "no", "0"];

var input = {
	textBox : document.getElementById("input"),
	get : function(e){
		if (e.key === 'Enter') {
			input.text = input.textBox.value;
			output.write(input.text);
			gameState.run(parseInput());
			input.clear();
		}
	},
	text : "",
	clear : function(){input.textBox.value = "";}
}

var output = {
	textBox : document.getElementById("output"),
	write : function(text){
		output.textBox.innerHTML+="<br>"+text;
		output.textBox.scrollTop = output.textBox.scrollHeight;
	}
}

input.textBox.addEventListener('keypress', function (e){input.get(e)});

function parseInput(){
	if(gameState.inputType == 0){
		if(yesList.indexOf(input.text) != -1){
			return 1;
		} else if(noList.indexOf(input.text) != -1){
			return 0;
		} else {
			return -1;
		}
	}
	
	return input.text;
}

function changeRoomImg(imgSrc){
	document.getElementById("roomImg").style.backgroundImage = "url('img/"+imgSrc+".png')";
}

function changePlrImg(imgSrc){
	document.getElementById("plrImg").src = "img/"+imgSrc+".png";
}

function init(){
	gameState = gameEvent.name.ask;
	gameState.run();
}

var plr = {
	name : ""
}