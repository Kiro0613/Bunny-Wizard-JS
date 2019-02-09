var staticEvent = {
	move : function(direction){
		console.log("Here");
		if(room.current.dir[direction] != -1){
			currentRoom = room.current.dir[direction];
			changeRoomImg(room.current.img);
			output.write("~~ "+room.current.name+" ~~", output.defaultSpeed);
			output.write(room.current.enterText, output.defaultSpeed/2)
		} else {
			output.write("Cannot go this direction.")
		}
	},
	put : function(id){
		room.current = room.map[id];
		changeRoomImg(room.current.img);
		output.write("~~ "+room.current.name+" ~~", output.defaultSpeed);
		output.write(room.current.enterText, output.defaultSpeed/2)
	},
	inv : function(){
		output.write("~~ Inventory ~~");
	},
	options : function(){
		//Scroll speed
		//Font size
		output.write("~~ Options ~~");
	},
	help : function(){
		output.write("~~ Help ~~");
	},
	list : [
		["n", "north", "forward", "forwards"],
		["e", "east", "right"],
		["s", "south", "back", "backward", "backwards"],
		["w", "west", "left", "weest"],
		["i", "inv", "inventory", "items", "bag"],
		["o", "opt", "option", "options", "settings"],
		["?", "help", "h"]
	],
	canFire : false
}

//Need this so input.parse can run staticEventArr[i] instead of long switch()
staticEventArr = [
	staticEvent.move,
	staticEvent.move,
	staticEvent.move,
	staticEvent.move,
	staticEvent.inv,
	staticEvent.options,
	staticEvent.help
]