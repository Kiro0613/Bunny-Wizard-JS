var staticEvent = {
	move : function(direction){
		newRoom = room.current.dir[direction];
		
		if(newRoom.id == -1){
			output.write("Cannot go this direction.");
			return;
		} else if(newRoom.isLocked){
			output.write("The door is locked.")
			return;
		} else {
			room.current = room.map[newRoom.id];
			changeRoomImg(room.current.img);
			room.current.enter();
		}
	},
	search : function(){
		if(room.current.items == null){
			output.write("Couldn't find anything.");
		} else {
			output.write("Found:");
			room.current.items.forEach(function(v){output.write(v)});
		}
	},
	take : function(item){
		if(item == undefined){
			output.write("To TAKE, say TAKE (ITEM)");
		} else if(item == "key"){
			output.write("Took the key.");
			room.current.items = null;
			plr.items.push("key");
		}
	},
	look : function(){
		output.write("Looked at thing");
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
		output.write("Movement: N, E, S, W");
		output.write("INV for inventory. (Equipment equipped automatically.)");
		output.write("OPT for options.");
		output.write("*all commands not case-sensitive");
	},
	list : [
		[function(){staticEvent.move(0)}, "n", "north", "forward", "forwards"],
		[function(){staticEvent.move(1)}, "e", "east", "right"],
		[function(){staticEvent.move(2)}, "s", "south", "back", "backward", "backwards"],
		[function(){staticEvent.move(3)}, "w", "west", "left", "weest"],
		[function(){staticEvent.search()}, "sr", "search", "search room", "serch"],
		[function(){staticEvent.take(input.textSplit[1])}, "t", "take", "grab", "pickup", "pick"],
		[function(){staticEvent.look()}, "l", "look", "look at", "lk"],
		[function(){staticEvent.inv()}, "i", "inv", "inventory", "items", "bag"],
		[function(){staticEvent.options()}, "o", "opt", "option", "options", "settings"],
		[function(){staticEvent.help()}, "?", "help", "h"]
	],
	parse : function(){
		for(i = 0; i < staticEvent.list.length; i++){
			if(staticEvent.list[i].has(input.text.toLowerCase())){
				return staticEvent.list[i][0]();
			}
		}
		output.write("I don't understand. (? for help)")
		return false;
	},
}

//Need this so input.parse can run staticEventArr[i] instead of long switch()
staticEventArr = [
	staticEvent.move,
	staticEvent.search,
	staticEvent.look,
	staticEvent.inv,
	staticEvent.options,
	staticEvent.help
]