var gameState;

var input = {
	textBox : document.getElementById("input"),
	get : function(e){
		if (e.key === 'Enter') {
			input.text = input.textBox.value;
			input.textLower = input.textBox.value.toLowerCase();
			output.write(input.text);
			gameState();
			input.clear();
		}
	},
	text : "",
	textLower : "",
	clear : function(){input.textBox.value = "";}
}

var output = {
	textBox : document.getElementById("output"),
	write : function(text){
		output.textBox.innerHTML+="<br>"+text;
		output.textBox.scrollTop = output.textBox.scrollHeight;
	},
	clear : function(wipe){	//false: push text w/ <br/> - true: wipe all text
		if(wipe){
			output.textBox.innerHTML = "";
			output.write("<br/><br/><br/><br/><br/>");
		} else {
			output.write("<br/><br/><br/><br/><br/><br/>");
		}
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

function Char(name, race, hp, mp, atk, def, spd, int, stl){
	this.name = name;
	this.race = race;
	this.hp = hp;
	this.hpmax = hp;
	this.mp = mp;
	this.mpmax = mp;
	this.atk = atk;
	this.def = def;
	this.spd = spd;
	this.int = int;
	this.stl = stl;
	this.canMove = false;
}

var plr = {
	name : ""
}