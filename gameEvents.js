//INPUT TYPE: Y/N = 0, Int = 1, String = 2, List = 3
var gameEvent = {
	name : function(){
		switch(eventIndex){
		case 0:	//Ask name
			output.write("Greetings, Hero! What is your name?", output.defaultSpeed, false);
			eventIndex = 1;
			break;
		case 1:	//Get name
			action = input.parse(2);
			plr.name = action;
			output.write("Ah, so your name is "+plr.name+"?");
			eventIndex = 2;
			break;
		case 2:	//Confirm name
			switch(input.parse(0)){
			case 1:	//Answer = YES
				output.write(plr.name+"! Tis a name that will live on for generations!");
				gameState = gameEvent.race;
				eventIndex = 0;
				gameState();
				break;
			case 0:	//Answer = NO
				output.write("I see. Well, what is your name then?");
				eventIndex = 1;
				break;
			case -1:	//Couldn't parse Y/N from input
				output.write("Is "+plr.name+" your name? YES or NO?");
				break;
			}
		}
	},
	race : function(){
		switch(eventIndex){
			case 0:	//Ask what race
				output.write("Well, "+plr.name+", err... what are you?");
				output.write("1. Bunny  2. Human  3. Elf  4. None of your business!", 0);
				eventIndex = 1;
				break;
			case 1:	//Get what race
				choices = [
					["1","bunny","rabbit","bun"],
					["2","human","person","homo sapien"],
					["3","elf"],
					["4","none of your business"]
				];
				switch(input.parse(3)){
					case 1:	//Bunny?
						plr = new Char(char.bunny);
						changePlrImg();
						plrImg.style.visibility = "visible";
						eventIndex = 3;
						gameState();
						break;
					case 2:	//Human?
						plr = new Char(char.human);
						changePlrImg();
						plrImg.style.visibility = "visible";
						eventIndex = 3;
						gameState();
						break;
					case 3:	//Elf?
						plr = new Char(char.elf);
						changePlrImg();
						plrImg.style.visibility = "visible";
						eventIndex = 3;
						gameState();
						break;
					case 4:	//Other
						output.write("Forgive my intrusion. What is it that you are called?")
						plr = new Char(char.human);
						eventIndex = 2;
						break;
					case -1:	//Could not parse
						output.write("I'm sorry. I don't understand.");
						output.write("1. Bunny  2. Human  3. Elf  4. None of your business!");
				}	//Parse answer
				break;
			case 2:	//Enter custom race (if needed)
				plr.race = input.parse(2);
				changePlrImg();
				plrImg.style.visibility = "visible";
				eventIndex = 3;
				gameState();
				break;
			case 3:	//Ask if sure
				output.write(plr.name+" the "+plr.race+". Are you sure this is who you are?");
				changePlrImg(plr.race+"_ph");
				eventIndex = 4;
				break;
			case 4:	//Parse if sure
				switch(input.parse(0)){
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
							eventIndex = 0;
							gameEvent.enterCastle();
						}, 4000)
						break;
					case 0:
						output.write("From the top then, shall we?");
						plrImg.style.visibility = "hidden";
						output.write("What is your name, Hero?");
						gameState = gameEvent.name;
						eventIndex = 1;
						break;
					case -1:
						output.write("You are "+plr.name+" the "+plr.race+", correct? YES or NO?");
				}
				break;
		}
	},
	enterCastle : function(){
		switch(eventIndex){
			case 0:
				staticEvent.put(0);
				staticEvent.canFire = true;
				plr.canMove = true;
				break;
		}
	}
};

var yesList = ["y", "ye", "yes", "yeah", "yea", "yep", "ya", "aye", "1"];
var noList = ["n", "no", "nope", "nah", "0"];

/* Game Event Template
eventName : function(){
	switch(eventIndex){
		case 0:	//Ask
			output.write("Ask text");
			eventIndex = 1;
			break;
		case 1:	//Get
			output.write("Do whatever");
			eventIndex = 2;
			break;
		case 3:	//Do thing
	}
}*/