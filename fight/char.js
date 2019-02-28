function Char(base){
	this.name = plr.name;
	this.race = base.race;
	this.hp = base.hp;
	this.hpmax = base.hp;
	this.mp = base.mp;
	this.mpmax = base.mp;
	this.atk = base.atk;
	this.def = base.def;
	this.spd = base.spd;
	this.int = base.int;
	this.stl = base.stl;
	this.sword = {
		name : "None",
		dmg : 0
	};
	this.shield = {
		name : "None",
		def : 0
	};
	
	this.inv = [];
	
	this.img = base.img;
	this.canMove = false;
}

var charBase = {
	bunny : {
		race : "Bunny",
		hp : 20,
		mp : 15,
		atk: 4,
		def : 3,
		spd : 5,
		int : 8,
		stl : 5,
		img : "img/bunny_ph.png"
	},
	human : {
		race : "Human",
		hp : 25,
		mp : 10,
		atk: 6,
		def : 2,
		spd : 8,
		int : 3,
		stl : 4,
		img : "img/human_ph.png"
	},
	elf : {
		race : "Elf",
		hp : 15,
		mp : 20,
		atk: 3,
		def : 4,
		spd : 4,
		int : 5,
		stl : 7,
		img : "img/elf_ph.png"
	},
	enemy : {
		race : "Enemy",
		hp : 25,
		mp : 10,
		atk: 6,
		def : 2,
		spd : 8,
		int : 3,
		stl : 4,
		img : "img/human_ph.png"
	}
}

var plr = {
	name : ""
}