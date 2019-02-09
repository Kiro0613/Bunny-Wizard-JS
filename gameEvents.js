//INPUT TYPE: Y/N = 0, Int = 1, String = 2, List = 3
var gameEvent = {
	name : function(){
		switch(eventIndex){
		case 0:	//Ask name
			output.write("Greetings, Hero! What is your name?", output.defaultSpeed, false);
			eventIndex = 1;
			break;
		case 1:	//Get name
			plr.name = input.text;
			output.write("Ah, so your name is "+plr.name+"?");
			eventIndex = 2;
			break;
		case 2:	//Confirm name
			switch(input.parse(yn)){
			case "yes":
				output.write(plr.name+"! Tis a name that will live on for generations!");
				gameState = gameEvent.race;
				eventIndex = 0;
				gameState();
				break;
			case "no":
				output.write("I see. Well, what is your name then?");
				eventIndex = 1;
				break;
			default:
				output.write("Is "+plr.name+" your name? YES or NO?");
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
					["4","other","none of your business"]
				];
				switch(input.parse(choices)){
					case "bunny":
						plr = new Char(char.bunny);
						changePlrImg();
						plrImg.style.visibility = "visible";
						eventIndex = 3;
						gameState();
						break;
					case "human":
						plr = new Char(char.human);
						changePlrImg();
						plrImg.style.visibility = "visible";
						eventIndex = 3;
						gameState();
						break;
					case "elf":
						plr = new Char(char.elf);
						changePlrImg();
						plrImg.style.visibility = "visible";
						eventIndex = 3;
						gameState();
						break;
					case "other":
						output.write("Forgive my intrusion. What is it that you are called?")
						plr = new Char(char.human);
						eventIndex = 2;
						break;
					default:
						output.write("I'm sorry. I don't understand.");
						output.write("1. Bunny  2. Human  3. Elf  4. None of your business!");
				}	//Parse answer
				break;
			case 2:	//Enter custom race (if needed)
				plr.race = input.text;
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
				switch(input.parse(yn)){
					case "yes":
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
							staticEvent.canFire = true;
							plr.canMove = true;
							gameState = gameEvent.enterCastle;
							eventIndex = 0;
							gameState();
						}, 4000)
						break;
					case "no":
						output.write("From the top then, shall we?");
						plrImg.style.visibility = "hidden";
						output.write("What is your name, Hero?");
						gameState = gameEvent.name;
						eventIndex = 1;
						break;
					default:
						output.write("You are "+plr.name+" the "+plr.race+", correct? YES or NO?");
				}
		}
	},
	enterCastle : function(){
		switch(eventIndex){
			case 0:
				staticEvent.put(0);
				eventIndex = 1;
				break;
			case 1:
				input.parse();
		}
	}
};

var yesList = ["1", "yes", "y", "ye", "yeah", "yea", "yep", "ya", "aye"];
var noList = ["0", "no", "n", "nope", "nah"];
var yn = [yesList, noList];

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