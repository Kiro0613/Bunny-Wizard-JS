//INPUT TYPE: Y/N = 0, Int = 1, String = 2, List = 3
var gameEvent = {
	name : {
		ask : function(){
			output.write("Greetings, Hero! What is your name?", 50, false);
			gameState = gameEvent.name.get;
		},
		get : function(){
			action = parseInput(2);
			plr.name = action;
			output.write("Ah, so your name is "+plr.name+"?");
			gameState = gameEvent.name.confirm;
		},
		confirm : function(){
			switch(parseInput(0)){
				case 1:
					output.write(plr.name+"! Tis a name that will live on for generations!");
					gameState = gameEvent.race.ask;
					gameState();
					break;
				case 0:
					output.write("I see. Well, what is your name then?");
					gameState = gameEvent.name.get;
					break;
				case -1:
					output.write("Is "+plr.name+" your name? YES or NO?");
					gameState = gameEvent.name.confirm;
			}
		}
	},
	race : {
		ask : function(){
			output.write("Well, "+plr.name+", err... what are you?");
			output.write("1. Bunny  2. Human  3. Elf  4. None of your business!", 0);
			gameState = gameEvent.race.get;
		},
		get : function(){
			choices = [
				["1","bunny","rabbit","bun"],
				["2","human","person","homo sapien"],
				["3","elf"],
				["4","none of your business"]
			];
			switch(parseInput(3)){
				case 1:
					output.write("Ah, so you're a Bunny?");
					plr = new Char(char.bunny);
					changePlrImg();
					plrImg.style.visibility = "visible";
					gameState = gameEvent.race.confirm;
					break;
				case 2:
					output.write("You're a Human, then?");
					plr = new Char(char.human);
					changePlrImg();
					plrImg.style.visibility = "visible";
					gameState = gameEvent.race.confirm;
					break;
				case 3:
					output.write("You are an Elf?")
					plr = new Char(char.elf);
					changePlrImg();
					plrImg.style.visibility = "visible";
					gameState = gameEvent.race.confirm;
					break;
				case 4:
					output.write("Forgive my intrusion. What is it that you are called?")
					plr = new Char(char.human);
					gameState = gameEvent.race.custom;
					break;
				case -1:
					output.write("I'm sorry. I don't understand.");
					output.write("1. Bunny  2. Human  3. Elf  4. None of your business!");
					gameState = gameEvent.race.get;
			}
		},
		custom : function(){
			plr.race = parseInput(2);
			input.textLower = "1";
			changePlrImg();
			plrImg.style.visibility = "visible";
			gameState = gameEvent.race.confirm;
			gameState();
		},
		confirm : function(){
			switch(parseInput(0)){
				case 1:
					output.write(plr.name+" the "+plr.race+". Are you sure this is who you are?");
					changePlrImg(plr.race+"_ph");
					gameState = gameEvent.race.finalConfirm;
					break;
				case 0:
					output.write("Oh. Well then, what race are you?");
					output.write("1. Bunny  2. Human  3. Elf  4. None of your business!");
					plrImg.style.visibility = "hidden";
					gameState = gameEvent.race.get;
					break;
				case -1:
					output.write("You are a "+plr.race+", correct? YES or NO?");
					gameState = gameEvent.race.confirm;
			}
		},
		finalConfirm : function(){
			switch(parseInput(0)){
				case 1:
					output.write("Then your journey begins!");
					output.write(" ", 300);
					output.write(". . .", 150);
					output.write(" ", 300);
					output.write(". . .", 150);
					output.write(" ", 300);
					output.write(". . .", 150);
					output.write(" ", 300);
					fireStatic = true;
					window.setTimeout(function(){
						gameEvent.enterCastle.start()
					}, 4000)
					break;
				case 0:
					output.write("From the top then, shall we?");
					plrImg.style.visibility = "hidden";
					output.write("What is your name, Hero?");
					gameState = gameEvent.name.get;
					break;
				case -1:
					output.write("Are you "+plr.name+" the "+plr.race+", YES or NO?");
					gameState = gameEvent.race.finalConfirm;
			}
		}
	},
	enterCastle : {
		start : function(){
			staticEvent.put(0);
			plr.canMove = true;
			output.write("You stand outside the fortress of the dreaded Iceberg Dragon. The mouth of the cave is to the NORTH.");
		}
	}
};

var yesList = ["y", "ye", "yes", "yeah", "yep", "ya", "1"];
var noList = ["n", "no", "nope", "nah", "0"];
var cardinals = [
	
];

var fireStatic = false;

function test(){
	for(i = 0; i <= 6; i++){
		if(input.has(staticEvent.list[i])){
			console.log(i);
			return i;
		}
	}
}

function fireEvent(){
	switch(test()) {
		case 0: if(plr.canMove){staticEvent.move(0)};
				break;
		case 1: if(plr.canMove){staticEvent.move(1)};
				break;
		case 2: if(plr.canMove){staticEvent.move(2)};
				break;
		case 3: if(plr.canMove){staticEvent.move(3)};
				break;
		case 4: staticEvent.inv();
				break;
		case 5: staticEvent.options();
				break;
		case 6: istaticEvent.help();
				break;
		default: gameState();
	}
}

function parseInput(type){
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
}