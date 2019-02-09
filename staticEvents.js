var staticEvent = {
	move : function(direction){
		if(room.current.dir[direction] != -1){
			room.current = room.map[room.current.dir[direction]];
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
	]
}

//Need this so input.parse can run staticEventArr[i] instead of long switch()
staticEventArr = [
	staticEvent.move,
	staticEvent.inv,
	staticEvent.options,
	staticEvent.help
]