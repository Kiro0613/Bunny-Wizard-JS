//INPUT TYPE: Y/N = 0, Int = 1, String = 2
var gameEvent = {
	askName : {
		inputType : null,
		run : function(){
			input.write("Greetings, Hero! What is your name?");
			gameState = gameEvent.getName;
		}
	},
	getName : {
		inputType : 2,
		run : function(val){
			input.write("Ah so your name is "+val);
		}
	}
};