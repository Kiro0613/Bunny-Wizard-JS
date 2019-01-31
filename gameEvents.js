//INPUT TYPE: Y/N = 0, Int = 1, String = 2
var gameEvent = {
	name : {
		ask : {
			inputType : null,
			run : function(val){
				output.write("Greetings, Hero! What is your name?");
				gameState = gameEvent.name.get;
			}
		},
		get : {
			inputType : 2,
			run : function(val){
				plr.name = val;
				output.write("Ah, so your name is "+plr.name+"?");
				gameState = gameEvent.name.confirm;
			}
		},
		confirm : {
			inputType : 0,
			run : function(val){
				if(val == 1){
					output.write(plr.name+"! Tis a name that will live on for generations!");
					gameState = gameEvent.species.ask;
					gameState.run(null);
				} else if(val == 0){
					output.write("I see. Well, what is your name then?");
					gameState = gameEvent.name.get;
				} else if(val == -1){
					output.write("Is "+plr.name+" your name? YES or NO?");
					gameState = gameEvent.name.confirm;
				}
			}
		}
	},
	species : {
		ask : {
			inputType : 1,
			run : function(val){
				output.write("Well, "+plr.name+", err... what are you?");
				output.write("1. Bunny  2. Human  3. Elf  4. None of your business!");
			}
		}
	}
};