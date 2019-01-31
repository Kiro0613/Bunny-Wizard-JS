var gameState;

var input = {
	textBox : document.getElementById("input"),
	get : function(e){
		if (e.key === 'Enter') {
			input.text = input.textBox.value;
			output.write(input.text);
			gameState();
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

function changeRoomImg(imgSrc){
	document.getElementById("roomImg").style.backgroundImage = "url('img/"+imgSrc+".png')";
}

function changePlrImg(imgSrc){
	document.getElementById("plrImg").src = "img/"+imgSrc+".png";
}

function init(){
	gameState = gameEvent.name.ask;
	gameState();
}

var plr = {
	name : "",
	race : ""
}