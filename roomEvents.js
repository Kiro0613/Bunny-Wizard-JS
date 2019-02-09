var room = {
	map : [
		{
			name : "Cave Mouth",		//0
			img : "img/0.png",
			dir : [3, -1, -1, -1],
			enterText : "You stand outside the fortress of the dreaded Iceberg Dragon. The mouth of the cave is to the NORTH.",
			move : [
				{id : 3, isLocked : false},
				{id : -1, isLocked : false},
				{id : -1, isLocked : false},
				{id : -1, isLocked : false}
			]
		},
		{
			name : "Armory",			//1
			img : "img/0.png",
			dir : [6, 2, -1, -1],
			enterText : "Room Enter Text"
		},
		{
			name : "Barracks",			//2
			img : "img/0.png",
			dir : [-1, 3, -1, 1],
			enterText : "Room Enter Text"
		},
		{
			name : "Courtyard",			//3
			img : "img/3.png",
			dir : [8, 4, 0, 2],
			enterText : "Room Enter Text"
		},
		{
			name : "Cavern",			//4
			img : "img/4.png",
			dir : [-1, 5, -1, 3],
			enterText : "Room Enter Text"
		},
		{
			name : "Spike Pit",			//5
			img : "img/0.png",
			dir : [-1, -1, -1, -1],
			enterText : "Room Enter Text"
		},
		{
			name : "Lvl. 1 Storage",	//6
			img : "img/0.png",
			dir : [-1, -1, 1, -1],
			enterText : "Room Enter Text"
		},
		{
			name : "Dining Room",		//7
			img : "img/0.png",
			dir : [-1, 12, -1, -1],
			enterText : "Room Enter Text"
		},
		{
			name : "Foyer",				//8
			img : "img/0.png",
			dir : [13, -1, 3, -1],
			enterText : "Room Enter Text"
		},
		{
			name : "Kitchen",			//9
			img : "img/0.png",
			dir : [14, 10, -1, 13],
			enterText : "Room Enter Text"
		},
		{
			name : "Guard Tower",		//10
			img : "img/0.png",
			dir : [15, -1, -1, 9],
			enterText : "Room Enter Text"
		},
		{
			name : "Library - Level 1",	//11
			img : "img/0.png",
			dir : [16, 12, -1, -1],
			enterText : "Room Enter Text"
		},
		{
			name : "West Hall",			//12
			img : "img/0.png",
			dir : [11, -1, 7, -1],
			enterText : "Room Enter Text"
		},
		{
			name : "Parlor",			//13
			img : "img/0.png",
			dir : [17, 9, 8, 12],
			enterText : "Room Enter Text"
		},
		{
			name : "Garden - West",		//14
			img : "img/0.png",
			dir : [18, 15, 9, 17],
			enterText : "Room Enter Text"
		},
		{
			name : "Garden - East",		//15
			img : "img/0.png",
			dir : [-1, -1, 10, 14],
			enterText : "Room Enter Text"
		},
		{
			name : "Servant Quarters",	//16
			img : "img/0.png",
			dir : [-1, 17, 11, -1],
			enterText : "Room Enter Text"
		},
		{
			name : "Terrarium",			//17
			img : "img/0.png",
			dir : [-1, 14, 13, 16],
			enterText : "Room Enter Text"
		},
		{
			name : "Farmer Quarters",	//18
			img : "img/0.png",
			dir : [-1, -1, 14, -1],
			enterText : "Room Enter Text"
		}
	],
	current : null
}