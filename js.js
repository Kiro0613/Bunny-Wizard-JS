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
	write : function(text, doBreak){
		if(doBreak != false){output.break();}
		output.textBox.innerHTML += text;
		output.textBox.scrollTop = output.textBox.scrollHeight;
		
	},
	writeBuffer : "",
	writeSlow : function(text, speed, doBreak){
		if(doBreak != false){output.break();}
		if(speed == null){
			speed = 50;
		}
		writeBuffer = text;
		slowWriter = setInterval(function(){
			if(writeBuffer.length > 0){
				output.textBox.innerHTML += writeBuffer.charAt(0);
				output.textBox.scrollTop = output.textBox.scrollHeight;
				writeBuffer = writeBuffer.slice(1);
			} else {
				clearInterval(slowWriter);
				console.log("here");
			}
		}, speed);
		return true;
	},
	break : function(){
		output.textBox.innerHTML += "<br/>";
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
	document.getElementById("plrImg").src = plr.img;
}

function init(){
	gameState = gameEvent.name.ask;
	gameState();
}

function Char(base){
	this.name = plr.name;
	this.race = base.race;
	this.hp = base.hp;
	this.hpmax = base.hp;
	this.mp = base.mp;
	this.mpmax = base.mp;
	this.atk = base.atk;
	this.def = base.def;
	this.spd = base.spd;
	this.int = base.int;
	this.stl = base.stl;
	this.img = base.img;
	this.canMove = false;
}

var char = {
	bunny : {
		name : "",
		race : "Bunny",
		hp : 20,
		mp : 15,
		atk: 4,
		def : 3,
		spd : 5,
		int : 8,
		stl : 5,
		img : "img/bunny_ph.png",
		canMove : false
	},
	human : {
		name : "",
		race : "Human",
		hp : 25,
		mp : 10,
		atk: 6,
		def : 2,
		spd : 8,
		int : 3,
		stl : 4,
		img : "img/human_ph.png",
		canMove : false
	},
	elf : {
		name : "",
		race : "Elf",
		hp : 15,
		mp : 20,
		atk: 3,
		def : 4,
		spd : 4,
		int : 5,
		stl : 7,
		img : "img/elf_ph.png",
		canMove : false
	}
}

var plr = {
	name : ""
}