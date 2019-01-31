import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class BunnyMain {
	
	public static Scanner scan = new Scanner(System.in);
	public static int action;
	public static Random rnum = new Random();
	public static ArrayList<Room> map;
	public static int currentRoom = -1;
	public static boolean dragonAlive = true;
	public static boolean ghostEncounter = false;
	
	//Player Info
	public static Char plr = null;
	public static String name;
	public static int killCt = 0;
	
	public static void main(String[] args) {
		map = Room.createMap();
		dragonAlive = true;
		ghostEncounter = false;
		currentRoom = -1;
		//Get player input for init
		System.out.println("Greetings, Hero! What is your name?");
		name = scan.nextLine();

		System.out.println("Ah, "+name+"! A lovely name! It is a name that will be told in stories for generations. Erm... what are you?\n1. Human  2. Bunny  3. Elf  4. None of your business, old man!");
		a();	//Select Race

		System.out.println(plr.name+" the "+plr.race+". Is that right?");
		b();	//Confirm name/race

		c();	//Enter Cave
		
		while(dragonAlive) {
			getAction(2);
		}

	}
	
	public static void a() {
		action = getAction(1);
		if(action == 1) {
			plr = new Char("Player", "Human", 20, 10, 0, "Unarmed", 0, "None", 4, 2, 8, 3, 4, 1, 0, 12);
			plr.name = name;
			System.out.println("Of course, forgive me! My eyesight isn't what it used to be.");
		} else if(action == 2) {
			plr = Char.generate("Bunny", plr);
			plr.name = name;
			System.out.println("Oh my, I didn't notice your ears!");
		} else if(action == 3) {
			plr = Char.generate("Elf", plr);
			plr.name = name;
			System.out.println("Ah, yes. The pointed ears were a dead giveaway!");
		} else if(action == 4) {
			System.out.println("Ok... what are you then?");
			plr = Char.generate("Human", plr);
			plr.name = name;
			plr.race = scan.nextLine();
		} else {
			System.out.println("I'm sorry, I didn't understand that.\n1. Human  2. Bunny  3. Elf  4. None of your business.");
			a();
		}
	}
	
	public static void b() {
		action = getAction(0);
		if(action == 1) {
			System.out.println("Then your journey begins!");
		} else if(action == 2) {
			gameover();
		} else {
			b();
		}
	}
	
	public static void c() {
		gotoRoom(0);
		action = getAction(0);
		if(action == 1) {
			System.out.println("You charge into the cave!");
			move(0);
		} else if(action == 2) {
			System.out.println("\"Pft, screw that!\" you exclaim. You leave for your home where you live a long (if unadventurous) life.");
			gameover();
		} else if(action == 0) {
			System.out.println("I don't understand.");
			c();
		} else {
			c();
		}
	}
	
	public static void foyerEncounter() {
		System.out.println("Oh no! You hear someone coming! What do you do!?\n1. Fight it!\n2. RUN!!\n3. Hide (roll for stealth)");
		action = getAction(1);
		if(action == 1) {
			fight();
		} else if(action == 2) {
			if(rnum.nextInt(10)+1 < plr.speed) {
				System.out.println("You got away!");
				map.get(5).hasEncounter = false;
			} else {
				System.out.println("You couldn't get away fast enough!");
				fight();
			}
		} else if(action == 3) {
			if(rnum.nextInt(10+1) < plr.stealth) {
				System.out.println("After rolling you D20 for a stealth check, the monster slips on it and smashed its head in. Convenient!");
				map.get(5).hasEncounter = false;
			} else {
				System.out.println("You couldn't find a place to hide!");
				fight();
			}
		} else {
			System.out.println("What are you saying!? Talk sense! Your life is on the line!!");
			foyerEncounter();
		}
	}
	
	public static void dragon() {
		System.out.println("The beast himself! It's time to finish this!");
		bossFight(1);
		if(dragonAlive == false) {
			System.out.println("You've slain the dragon! Congratulations, Hero! The name "+plr.name+" will be remembered for generations as the one who saved Rabbit Village from the tyranny of the Iceberg Dragon. You have restored tasty, flavorful lettuce to the land, and for that we are grateful.\nCongratulations, "+plr.name+"! You win!!");
		}
	}
	
	public static void spikePit() {
		if(map.get(currentRoom).isLit) {
			System.out.println("You, knowing full well that there was spiky doom in this fully-lit cavern, decide to walk off the edge of the pit and land in the spikes. I'm disappointed in you, "+plr.name+".");
		} else {
			System.out.println("Stumbling around in the darkness, you find a steep wall. Unfortunately, you found it by walking off it. You end up impaled on stalagmites.");
		}
		gameover();
	}
	
	public static void ghost() {
		System.out.println("What's that!? An ethereal being appears before you!\n\"Thank you,\" he says to you. \"A gift...\" he whispers as he disappears in a glow of light. As he fades away he leaves something behind. As the light wears off you can make out what the object is:\nA shield.");
		map.get(10).hasItem = true;
		ghostEncounter = false;
	}
	
	public static int getAction(int type) {	//Type 0 = yes/no; Type 1 = multiple options
		// 1 = Option 1/"Yes"; 2 = Option 2/"No"; 0 = Could not parse
		String input = scan.nextLine();
		int output = 0;

		if(input.equalsIgnoreCase("i") || input.equalsIgnoreCase("inv") || input.equalsIgnoreCase("inventory")) {
			writeInv();
			output = -1;	//-1 means Do Not Write
			return output;
		}

		if(input.equalsIgnoreCase("spell") || input.equalsIgnoreCase("magic") || input.equalsIgnoreCase("cast") || input.equalsIgnoreCase("cast spell")) {
			magic();
			output = -1;	//-1 means Do Not Write
			return output;
		}

		if(input.equalsIgnoreCase("search") || input.equalsIgnoreCase("serch") || input.equalsIgnoreCase("srch") || input.equalsIgnoreCase("src") || input.equalsIgnoreCase("sr")) {
			searchRoom();
			output = -1;	//-1 means Do Not Write
			return output;
		}
		
		if(input.equalsIgnoreCase("heal")) {
			output = -2;	//-1 means Do Not Write
			return output;
		}
		
		if(input.equalsIgnoreCase("light")) {
			output = -3;	//-1 means Do Not Write
			return output;
		}

		if(input.equalsIgnoreCase("?") || input.equalsIgnoreCase("help") || input.equalsIgnoreCase("commands")) {
			System.out.println(" - HELP MENU -\nYes/No questions are answered 'y' or 'n'\nWhen numbers are presented, pick a number next to your choice\nMove using cardinals (NSEW) or relative directions (Forward, Backward, Left, Right)\ni for Inventory  |  magic to open Magic Menu  |  sr to search a room");
			output = -1;	//-1 means Do Not Write
			return output;
		}
		
		try {
			if(type == 0) {
				if((input.substring(0, 1)).equalsIgnoreCase("y") || input.equals("1")) {
					output = 1;
				} else if((input.substring(0, 1)).equalsIgnoreCase("n") || input.equals("2")) {
					output = 2;
				} else {
					output = 0;
				}
			} else if(type == 1) {
				try {
					output = Integer.parseInt(input);
				} catch (NumberFormatException e) {
					output = 0;
				}
			} else if(type == 2) {
				if((input.substring(0, 1)).equalsIgnoreCase("n") || (input.substring(0, 1)).equalsIgnoreCase("f")) {
					move(0);
					output = -1;
				} else if((input.substring(0, 1)).equalsIgnoreCase("e") || (input.substring(0, 1)).equalsIgnoreCase("r")) {
					move(1);
					output = -1;
				} else if((input.substring(0, 1)).equalsIgnoreCase("s") || (input.substring(0, 1)).equalsIgnoreCase("b")) {
					move(2);
					output = -1;
				} else if((input.substring(0, 1)).equalsIgnoreCase("w") || (input.substring(0, 1)).equalsIgnoreCase("l")) {
					move(3);
					output = -1;
				} else {
					System.out.println("I don't understand. (? for help)");
					output = 0;
				}
			}
		} catch(StringIndexOutOfBoundsException e) {
			
		}
		
		return output;
	}
	
	public static void move(int dir) {
		int newRoom = 0;
		if(dir == 0) {
			newRoom = (map.get(currentRoom).n);
		} else if(dir == 1) {
			newRoom = (map.get(currentRoom).e);
		} else if(dir == 2) {
			newRoom = (map.get(currentRoom).s);
		} else if(dir == 3) {
			newRoom = (map.get(currentRoom).w);
		}
		
		if(newRoom != -1) {
			if(newRoom == 14) {
				spikePit();
			} else if(newRoom == 10 && ghostEncounter == true) {
				ghost();
			}
			currentRoom = newRoom;
			if(map.get(currentRoom).hasEncounter) {
				if(currentRoom == 5) {
					foyerEncounter();
				} else if(currentRoom == 12){
					dragon();
				} else {
					fight();
				}
			}
			System.out.println(" ~ "+map.get(currentRoom).name+" ~");
			System.out.println(map.get(currentRoom).enterText);
		} else {
			System.out.println("Cannot go this way.");
		}
	}
	
	public static void gotoRoom(int id) {
		currentRoom = id;
		System.out.println(" ~ "+map.get(currentRoom).name+" ~");
		System.out.println(map.get(currentRoom).enterText);
	}
	
	public static void writeInv() {
		System.out.println(plr.name+" the "+plr.race+" | "+plr.hp+"/"+plr.hpmax+" HP  "+plr.mp+"/"+plr.mpmax+" MP | lvl "+plr.xp.lvl+" ("+plr.xp.curxp+"/"+plr.xp.lvlxp+" XP)\nATK: "+(plr.atk+plr.weapon.dmg)+"  DEF: "+(plr.def+plr.armor.def)+"  INT: "+plr.intel+"  SPD: "+plr.speed+"  STL: "+plr.stealth+"\nWeapon: "+plr.weapon.name+" (+"+plr.weapon.dmg+" ATK)  Armor: "+plr.armor.name+" (+"+plr.armor.def+" DEF)");
	}
	
	public static void magic() {
		System.out.println("What spell would you like to cast?");
		if(plr.spell.hasHeal) {System.out.println("1. Heal (4 MP)");} else {System.out.println("1. UNKNOWN");}
		if(plr.spell.hasLight) {System.out.println("2. Light (2 MP)");} else {System.out.println("2. UNKNOWN");}
		System.out.println("3. Exit");
		action = getAction(1);
		if(action == 1 || action == -2) {
			plr.spell.heal();
		} else if(action == 2 || action == -3) {
			if(plr.spell.light()) {
				System.out.println("The room lights up with your magic.");
				map.get(currentRoom).isLit = true;
				if(currentRoom == 2) {
					System.out.println("The cavern lights up in a blinding flash. It turns out that the darkness to the east was concealing a massive pit of impaling stalagmites. Good thing you didn't go that way... There's something glinting light by the edge of the pit.");
				}
			}
		} else if(action == 3){
			System.out.println("You change your mind about casting a spell.");
			gotoRoom(currentRoom);
		} else {
			System.out.println("I don't understand.");
		}
	}
	
	public static void searchRoom(){
		if(map.get(currentRoom).hasItem == false) {
			System.out.println("You couldn't find anything.");
		} else {
			if(currentRoom == 2) {
				if(map.get(2).isLit) {
					System.out.println("You find a sword resting on the edge of the pit. Will you take the sword?\nYes   No");
					action = getAction(0);
					if(action == 1) {
						System.out.println("You got the Cavern Sword! +4 ATK");
						plr.weapon.dmg = 4;
						plr.weapon.name = "Cavern Sword";
						map.get(2).hasItem = false;
					} else if(action == 2) {
						System.out.println("You leave the sword.");
					} else {
						System.out.println("I don't understand.");
						searchRoom();
					}
				} else {
					System.out.println("It's too dark to see anything! If only you had a light.");
				}
			} else if(currentRoom == 3) {
				System.out.println("After a few minutes of searching, you find an old shortsword. Will you take it?");
				action = getAction(0);
				if(action == 1) {
					System.out.println("You got the Sparring Sword! +1 ATK");
					plr.weapon.dmg = 1;
					plr.weapon.name = "Sparring Sword";
					map.get(2).hasItem = false;
				} else if(action == 2) {
					System.out.println("You leave the sword.");
				} else {
					System.out.println("I don't understand.");
					searchRoom();
				}
			} else if(currentRoom == 4) {
				System.out.println("You see that the shield display holds a sturdy-looking shield. Will you take it?");
				action = getAction(0);
				if(action == 1) {
					System.out.println("You got the Simple Shield! +1 DEF");
					plr.armor.def = 1;
					plr.armor.name = "Simple Shield";
					map.get(4).hasItem = false;
				} else if(action == 2) {
					System.out.println("You leave the shield.");
				} else {
					System.out.println("I don't understand.");
					searchRoom();
				}
			} else if(currentRoom == 9) {
				System.out.println("You decide to search the library for something useful. But the library is really big... How will you find what book is useful?\n1. Wander Aimlessly\n2. Ask the librarian");
				if(plr.intel > 6) {
					System.out.println("3. Use the Dewey decimal system");
				}
				action = getAction(1);
				if(action == 1) {
					if(rnum.nextInt(5) < 1) {
						System.out.println("Lucky! You happened to find a book on basic magic.\nLearned Light Spell!");
						plr.spell.hasLight = true;
					} else {
						System.out.println("After some wandering, you find nothing of any use to you.");
					}
				} else if(action == 2) {
					System.out.println("The librarian attacks you!!");
					bossFight(0);
					if(rnum.nextInt(2) < 1) {
						System.out.println("Score! The librarian dropped a book on basic magic.\nLearned Light Spell!");
						plr.spell.hasLight = true;
					} else {
						System.out.println("You figure you shouldn't spend much more time here.");
					}
				} else if(action == 3) {
					System.out.println("Using your mastery of numbers (and considerable time spent in libraries), you guide yourself to the Magic section. You pick up a book on basic magic.\nLearned Light Spell!");
					plr.spell.hasLight = true;
				}
				map.get(9).hasItem = false;
			} else if(currentRoom == 11) {
				System.out.println("One of the fallen warriors has some armor. It's well-worn, but looks sturdy enough. Will you take the armor?");
				action = getAction(0);
				if(action == 1) {
					System.out.println("You take the fallen warrior's armor.\nGained Fallen Armor! (+3 DEF)");
					plr.armor.def = 3;
					plr.armor.name = "Fallen Armor";
					ghostEncounter = false;
				} else if(action == 2) {
					System.out.println("You decide to let the warrior rest undisturbed.");
					ghostEncounter = true;
				}
			} else if(currentRoom == 10) {
				System.out.println("The Ghost's shield lies in the corridor. Will you take the shield?");
				action = getAction(0);
				if(action == 1) {
					System.out.println("You acquired the Warrior's Shield! (+5 DEF)");
					plr.armor.def = 5;
					plr.armor.name = "Warrior's Shield";
					map.get(10).hasItem = false;
				} else if(action == 2) {
					System.out.println("You leave the fallen warrior's shield alone.");
				}
			} else if(currentRoom == 8) {
				System.out.println("You find a \"Potion of Inhibition.\" Drink it?");
				action = getAction(0);
				if(action == 1) {
					System.out.println("You drink yourself to death, yadda yadda, I'm not really feeling writey right now. I'll put funny text later. Ciao");
					gameover();
				} else if(action == 2) {
					System.out.println("You SAY NO TO DRUGS!");
				} else {
					System.out.println("Dunno wot ur sayin, mang");
					searchRoom();
				}
			}
		}
	}
	
	public static void levelUp() {
		if(plr.xp.curxp >= plr.xp.lvlxp) {
			plr.xp.lvl++;
			plr.xp.curxp -= plr.xp.lvlxp;
			plr.xp.lvlxp = (int) (plr.xp.lvlxp*1.8);
			plr.hpmax = (int) Math.ceil(plr.hpmax*1.2);
			plr.mpmax = (int) Math.ceil(plr.mpmax*1.2);
			plr.hp = plr.hpmax;
			plr.mp = plr.mpmax;
			plr.atk = (int) Math.ceil(plr.atk*1.2);
			plr.def = (int) Math.ceil(plr.def*1.2);
			plr.intel = (int) Math.ceil(plr.intel*1.2);
			plr.speed = (int) Math.ceil(plr.speed*1.2);
			plr.stealth = (int) Math.ceil(plr.stealth*1.2);
			System.out.println("Level Up! You are now level "+plr.xp.lvl);
			levelUp();
		}
	}
	
	public static void fight() {
		Char enemy = Char.generate("Monster", plr);
		System.out.println("A "+enemy.race+" appears! ("+enemy.hp+" HP)");
		//Main fight loop
		while(enemy.hp > 0 && plr.hp > 0) {
			//Attack
			plr.atk = (plr.atk+plr.weapon.dmg);
			//System.out.println(plr.atk);
			enemy.atk = rnum.nextInt(4) + 1;
			plr.hp -= (Math.round(enemy.atk)-((plr.def+plr.armor.def)/2));
			enemy.hp -= plr.atk;
		}
		
		if(enemy.hp <= 0) {
			killCt++;
			plr.xp.curxp += enemy.xp.curxp;
			System.out.println("The "+enemy.race+" has been defeated! You have "+plr.hp+" health remaining. Gained "+enemy.xp.curxp+" XP!");
			levelUp();
			map.get(currentRoom).hasEncounter = false;
			//fight();
		}
		
		if(plr.hp <= 0) {
			System.out.println(plr.name+" has been slain by the "+enemy.race+"... Rest in peace, Hero.");
			gameover();
		}
		
	}
	
	public static void bossFight(int boss) {
		Char enemy = null;
		if(boss == 0) {	//Librarian
			enemy = Char.generate("Librarian", plr);
		} else if(boss == 1) {	//Librarian
			enemy = Char.generate("Dragon", plr);
		}
		System.out.println(enemy.name+" the "+enemy.race+" appears! ("+enemy.hp+" HP)");
		while(enemy.hp > 0 && plr.hp > 0) {
			//Attack
			plr.atk = rnum.nextInt(4) + ((plr.atk+plr.weapon.dmg)-2);
			enemy.atk = rnum.nextInt(4) + 1;
			plr.hp -= (Math.round(enemy.atk)-((plr.def+plr.armor.def)/2));
			enemy.hp -= plr.atk;
		}
		
		if(enemy.hp <= 0) {
			killCt++;
			plr.xp.curxp += enemy.xp.curxp;
			System.out.println(enemy.name+" the "+enemy.race+" has been slain! Well done, Hero! You have "+plr.hp+" health remaining. Gained "+enemy.xp.curxp+" XP!");
			levelUp();
			map.get(currentRoom).hasEncounter = false;
			if(boss == 1) {
				dragonAlive = false;
			}
			//fight();
		}
		
		if(plr.hp <= 0) {
			System.out.println(plr.name+" has been slain by "+enemy.name+" the "+enemy.race+"... Rest in peace, Hero.");
			gameover();
		}
	}
	
	public static void gameover() {
		System.out.println("\nGAME OVER\n\n");
		main(new String[] {});
	}
}
