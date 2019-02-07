var staticEvent = {
	move : function(direction){
		if(map[plr.currentRoom].dir[direction] != -1){
			plr.currentRoom = map[plr.currentRoom].dir[direction];
			changeRoomImg(map[plr.currentRoom].img);
			output.write("~~ "+map[plr.currentRoom].name+" ~~", 75);
		} else {
			output.write("Cannot go this direction.")
		}
	},
	put : function(id){
		plr.currentRoom = id;
		changeRoomImg(map[plr.currentRoom].img);
		output.write(" ~~ ");
		output.write(map[plr.currentRoom].name, output.defaultSpeed, false);
		output.write(" ~~", output.defaultSpeed, false);
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

var map = [
	{
		name : "Cave Mouth",		//0
		img : "img/0.png",
		dir : [3, -1, -1, -1]
	},
	{
		name : "Armory",			//1
		img : "img/0.png",
		dir : [6, 2, -1, -1]
	},
	{
		name : "Barracks",			//2
		img : "img/0.png",
		dir : [-1, 3, -1, 1]
	},
	{
		name : "Courtyard",			//3
		img : "img/3.png",
		dir : [8, 4, 0, 2]
	},
	{
		name : "Cavern",			//4
		img : "img/4.png",
		dir : [-1, 5, -1, 3]
	},
	{
		name : "Spike Pit",			//5
		img : "img/0.png",
		dir : [-1, -1, -1, -1]
	},
	{
		name : "Lvl. 1 Storage",	//6
		img : "img/0.png",
		dir : [-1, -1, 1, -1]
	},
	{
		name : "Dining Room",		//7
		img : "img/0.png",
		dir : [-1, 12, -1, -1]
	},
	{
		name : "Foyer",				//8
		img : "img/0.png",
		dir : [13, -1, 3, -1]
	},
	{
		name : "Kitchen",			//9
		img : "img/0.png",
		dir : [14, 10, -1, 13]
	},
	{
		name : "Guard Tower",		//10
		img : "img/0.png",
		dir : [15, -1, -1, 9]
	},
	{
		name : "Library - Level 1",	//11
		img : "img/0.png",
		dir : [16, 12, -1, -1]
	},
	{
		name : "West Hall",			//12
		img : "img/0.png",
		dir : [11, -1, 7, -1]
	},
	{
		name : "Parlor",			//13
		img : "img/0.png",
		dir : [17, 9, 8, 12]
	},
	{
		name : "Garden - West",		//14
		img : "img/0.png",
		dir : [18, 15, 9, 17]
	},
	{
		name : "Garden - East",		//15
		img : "img/0.png",
		dir : [-1, -1, 10, 14]
	},
	{
		name : "Servant Quarters",	//16
		img : "img/0.png",
		dir : [-1, 17, 11, -1]
	},
	{
		name : "Terrarium",			//17
		img : "img/0.png",
		dir : [-1, 14, 13, 16]
	},
	{
		name : "Farmer Quarters",	//18
		img : "img/0.png",
		dir : [-1, -1, 14, -1]
	}
]