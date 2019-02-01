//INPUT TYPE: Y/N = 0, Int = 1, String = 2, List = 3
var gameEvent = {
	name : {
		ask : function(){
			output.write("Greetings, Hero! What is your name?");
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
			output.write("1. Bunny  2. Human  3. Elf  4. None of your business!");
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
					plr = new Char(plr.name, "Bunny", 20, 15, 4, 3, 5, 8, 5)
					gameState = gameEvent.race.confirm;
					break;
				case 2:
					output.write("You're a Human, then?");
					plr = new Char(plr.name, "Human", 25, 10, 6, 2, 8, 3, 4);
					gameState = gameEvent.race.confirm;
					break;
				case 3:
					output.write("You are an Elf?")
					plr = new Char(plr.name, "Elf", 15, 20, 3, 4, 4, 5, 7);
					gameState = gameEvent.race.confirm;
					break;
				case 4:
					output.write("Forgive my intrusion. What is it that you are called?")
					gameState = gameEvent.race.custom;
					break;
				case -1:
					output.write("I'm sorry. I don't understand.");
					output.write("1. Bunny  2. Human  3. Elf  4. None of your business!");
					gameState = gameEvent.race.get;
			}
		},
		custom : function(){
			plr = new Char(plr.name, parseInput(2), 25, 10, 6, 2, 8, 3, 4);
			input.text = "1";
			gameState = gameEvent.race.confirm;
			gameState();
		},
		confirm : function(){
			switch(parseInput(0)){
				case 1:
					output.write(plr.name+" the "+plr.race+". Are you sure this is who you are?");
					gameState = gameEvent.race.finalConfirm;
					break;
				case 0:
					output.write("Oh. Well then, what race are you?");
					output.write("1. Bunny  2. Human  3. Elf  4. None of your business!");
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
					window.setTimeout(gameEvent.enterCastle.start(), 7500);
					break;
				case 0:
					output.write("From the top then, shall we?");
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
			changeRoomImg("0");
			changePlrImg(plr.race+"_ph");
			output.write("You stand outside the fortress of the dreaded Icrberg Dragon.");
		}
	}
};

var yesList = ["y", "yes", "1"];
var noList = ["n", "no", "0"];

function parseInput(type){
	if(type == 0){
		return yesList.indexOf(input.textLower) != -1 ? 1 : noList.indexOf(input.textLower) != -1  ? 0 : -1;
	} else if(type == 1){
		//Regex tests for int
		return /^\d+$/g.test(input.text) ? input.text : -1;
	} else if(type == 2){
		return input.text;
	} else if(type == 3){
		for(i=0;i<choices.length;i++){
			if(choices[i].indexOf(input.textLower) != -1){
				return i+1;
			}
		}
		return -1;
	} else {
		throw new Error("Game event has no input type");
	}
}











