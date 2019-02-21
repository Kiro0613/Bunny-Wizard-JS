var room = {
	map : [
		{
			name : "Cave Mouth",		//0
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 3, isLocked : false},
				{id : -1},
				{id : -1},
				{id : -1},
			],
			timesEntered : 0,
			enterText : "You stand outside the fortress of the dreaded Iceberg Dragon. The mouth of the cave is to the NORTH.",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Armory",			//1
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 6, isLocked : false},
				{id : 2, isLocked : false},
				{id : -1},
				{id : -1},
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Barracks",			//2
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : 3, isLocked : false},
				{id : -1}, 
				{id : 1, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Courtyard",			//3
			img : "img/3.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 8, isLocked : true, unlock : function(){
					if(plr.inv.includes("Courtyard Key")){
						output.write("You unlock the main gate in the Courtyard.")
						this.isLocked = false;
						staticEvent.move(0);
					} else {
						output.write("You don't have the key!")
					}
				}}, 
				{id : 4, isLocked : false},
				{id : 0, isLocked : false}, 
				{id : 2, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : ["Key under mat"]
		},
		{
			name : "Cavern",			//4
			img : "img/4.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : 5, isLocked : false},
				{id : -1}, 
				{id : 3, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Spike Pit",			//5
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : -1},
				{id : -1}, 
				{id : -1}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Lvl. 1 Storage",	//6
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : -1},
				{id : 1, isLocked : false}, 
				{id : -1}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Dining Room",		//7
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : 12, isLocked : false},
				{id : -1}, 
				{id : -1}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Foyer",				//8
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 13, isLocked : false}, 
				{id : -1},
				{id : 3, isLocked : false}, 
				{id : -1}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It's a grand hall connecting most parts of the castle. There is a staircase.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Kitchen",			//9
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 14, isLocked : false}, 
				{id : 10, isLocked : false},
				{id : -1}, 
				{id : 13, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Guard Tower",		//10
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 15, isLocked : false}, 
				{id : -1},
				{id : -1}, 
				{id : 9, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Library - Level 1",	//11
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 16, isLocked : false}, 
				{id : 12, isLocked : false},
				{id : -1}, 
				{id : -1}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "West Hall",			//12
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 11, isLocked : false}, 
				{id : -1},
				{id : 7, isLocked : false}, 
				{id : -1}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Parlor",			//13
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 17, isLocked : false}, 
				{id : 9, isLocked : false},
				{id : 8, isLocked : false}, 
				{id : 12, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Garden - West",		//14
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : 18, isLocked : false}, 
				{id : 15, isLocked : false},
				{id : 9, isLocked : false},
				{id : 17, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Garden - East",		//15
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : -1},
				{id : 10, isLocked : false}, 
				{id : 14, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Servant Quarters",	//16
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : 17, isLocked : false},
				{id : 11, isLocked : false}, 
				{id : -1}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Terrarium",			//17
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : 14, isLocked : false},
				{id : 13, isLocked : false}, 
				{id : 16, isLocked : false}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		},
		{
			name : "Farmer Quarters",	//18
			img : "img/0.png",
			enter : function(){room.defaultEnter();},
			dir : [
				{id : -1}, 
				{id : -1},
				{id : 14, isLocked : false}, 
				{id : -1}
			],
			timesEntered : 0,
			enterText : "Room Enter Text",
			lookText : "It is a room.",
			searchText : "Couldn't find anything.",
			items : null
		}
	],
	current : null,
	defaultEnter : function(){
		output.write("~~ "+room.current.name+" ~~");
		if(room.current.timesEntered == 0){
			output.write(room.current.enterText);
		}
		room.current.timesEntered++;
	}
}