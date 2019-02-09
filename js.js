var gameState;
var eventIndex = 0;
var currentRoom;

var input = {
	textBox : document.getElementById("input"),
	get : function(e){
		if (e.key === 'Enter' && output.isWriting == false) {
			input.text = input.textBox.value;input.textBox.value = "";
			output.textBox.innerHTML += "<br/>"+input.text;
			output.textBox.scrollTop = output.textBox.scrollHeight;
			gameState();
		}
	},
	text : "",
	parse : function(type){
		//Static events like move, inv, options, etc
		if(staticEvent.canFire){
			for(i = 0; i <= 6; i++){
				if(input.has(staticEvent.list[i])){
					return i <= 3 ? staticEventArr[i](i) : staticEventArr[i]();
				}
			}
		}
		if(type == 0){
			return input.has(yesList) ? 1 : input.has(noList) ? 0 : -1;
		} else if(type == 1){
			//Regex tests for int
			return /^\d+$/g.test(input.text) ? input.text : -1;
		} else if(type == 2){
			return input.text;
		} else if(type == 3){
			for(i=0;i<choices.length;i++){
				if(input.has(choices[i])){
					return i+1;
				}
			}
			return -1;
		} else {
			throw new Error("Game event has no input type");
		}
	},
	has : function(list){
		return list.indexOf(input.text.toLowerCase()) != -1;
	}
}

var output = {
	textBox : document.getElementById("output"),
	writeBuffer : [],
	write : function(text, speed = output.defaultSpeed, doBreak = true){
		output.writeBuffer.push(() => {
			var writeLoop = setInterval(function(){
				//Break line before writing
				if(doBreak){
					output.textBox.innerHTML += "<br/>";
					doBreak = false;
				}
				//Write char to screen and autoscroll text window
				output.textBox.innerHTML += text.charAt(0);
				output.textBox.scrollTop = output.textBox.scrollHeight;
				//Kill interval when last char printed OR slice first char from string
				if(text.length <= 1){
					clearInterval(writeLoop);
					if(output.writeBuffer.length > 1){
						output.writeBuffer[1]();
					} else {
						output.isWriting = false;
					}
					output.writeBuffer.splice(0, 1);
				} else {
					text = text.slice(1);
				}
			}, speed)
		});
		if(output.isWriting == false){
			output.isWriting = true;
			output.writeBuffer[0]();
		}
	},
	isWriting : false,
	defaultSpeed : 15,
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
	document.getElementById("roomImg").style.backgroundImage = "url('"+imgSrc+"')";
}

var plrImg = document.getElementById("plrImg");
function changePlrImg(imgSrc){
	plrImg.src = plr.img;
}

function init(){
	input.textBox.focus();
	gameState = gameEvent.name;
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
	this.sword = {
		name : "None",
		dmg : 0
	};
	this.shield = {
		name : "None",
		def : 0
	};
	
	this.inv = [];
	
	this.img = base.img;
	this.canMove = false;
	
	this.has = function(item){
		return this.inv.indexOf(item) != -1;
	}
}

var char = {
	bunny : {
		race : "Bunny",
		hp : 20,
		mp : 15,
		atk: 4,
		def : 3,
		spd : 5,
		int : 8,
		stl : 5,
		img : "img/bunny_ph.png"
	},
	human : {
		race : "Human",
		hp : 25,
		mp : 10,
		atk: 6,
		def : 2,
		spd : 8,
		int : 3,
		stl : 4,
		img : "img/human_ph.png"
	},
	elf : {
		race : "Elf",
		hp : 15,
		mp : 20,
		atk: 3,
		def : 4,
		spd : 4,
		int : 5,
		stl : 7,
		img : "img/elf_ph.png"
	}
}

var plr = {
	name : ""
}