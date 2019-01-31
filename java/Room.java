import java.util.ArrayList;

/*
 * 0 - Cave Mouth
 * 1 - Courtyard
 * 2 - Cavern
 * 3 - Armory 1
 * 4 - Armory 2
 * 5 - Foyer
 * 6 - Parlor
 * 7 - Kitchen
 * 8 - Dining Hall
 * 9 - Library
 */

public class Room {
	public void arrayList() {};
	int id;
	String name;
	int n;
	int e;
	int s;
	int w;
	boolean isLit;
	boolean hasItem = false;
	boolean hasEncounter = false;
	
	String enterText;
	
	public Room(int id, String name, int n, int e, int s, int w) {
		this.id = id;
		this.name = name;
		this.n = n;
		this.e = e;
		this.s = s;
		this.w = w;
	}
	
	public static ArrayList<Room> createMap() {
		ArrayList<Room> map = new ArrayList<Room>();
		map.add(new Room(0, "Cave", 1, -1, -1, -1));
		map.get(0).enterText = "Lying in the fog before you is a mighty mountain. Etched like a mole in the side of the mountain is the Cave. Darkness looms from the Cave's great mouth. Stalactites like teeth threaten to gnaw on your bones with the slightest mistake.\nDare you enter the Cave?";
		
		map.add(new Room(1, "Courtyard", 5, 2, 0, 3));
		map.get(1).enterText = "You find yourself in a grand courtyard neath a stone canopy. There is a branching path with three directions.\nTo the west, an armory, looking to be abandoned. In front of you, great doors. To the east, a dark carvern.";
		map.get(1).hasEncounter = true;
		
		map.add(new Room(2, "Cavern", -1, 14, -1, 1));
		map.get(2).enterText = "The cavern is covered with a blanket of shadow. It's so dark that you can hardly see a thing; the only clear light is the entrance you used to the west. The north wall is flat with grooves - likely made of brick. To the east is further blackness. Without a light, there's no telling what the cave holds deeper.\nTo the west is the Courtyard.";
		map.get(2).hasItem = true;
		
		map.add(new Room(3, "Armory", -1, 1, -1, 4));
		map.get(3).enterText = "The armory holds very little but cobwebs. Mannequins that once displayed armor are stripped bare. A brief sweep of the room reveals no gear, but a more thorough search may yield something. To the west is a back room of the armory.\nTo the east is the Courtyard.";
		map.get(3).hasItem = true;
		
		map.add(new Room(4, "Back Armory", -1, 3, -1, -1));
		map.get(4).enterText = "There is a display for a shield on the wall.\nThe only exit is the front room of the Armory to the east.";
		map.get(4).hasItem = true;
		map.get(4).hasEncounter = true;
		
		map.add(new Room(5, "Foyer", 6, -1, 1, -1));
		map.get(5).enterText = "There is little of interest here. South is the Grand Doors leading to the Courtyard.\nNorth is the Parlor.";
		map.get(5).hasEncounter = true;
		
		map.add(new Room(6, "Parlor", 10, 7, 5, 13));
		map.get(6).enterText = "The Parlor is a grand hall connecting most parts of the castle.\nTo the south is the Foyer. To the east is the Kitchen. To the west is the West Hall, leading to the Dining Room and the Library. To the north is the Dragon's Antechamber.";
		
		map.add(new Room(7, "Kitchen", -1, -1, -1, 6));
		map.get(7).enterText = "The kitchen is very hot! Ovens baking, stovetops searing, and all manner of cutlery being used, washed, and reused. Three cooks are frantically preparing food while a fourth person yells in a low grumble. He must be the head chef. No one takes any interest in you, but it's unclear whether it's because they haven't noticed you or are just apathetic.\nTo the west is the Parlor.";
		map.get(7).hasItem = true;
		
		map.add(new Room(8, "Dining Room", -1, 13, -1, -1));
		map.get(8).enterText = "A grand feast is taking place. The table is over 60 feet long and 5 feet wide. It's stacked with food of all kinds, all smelling delicious. To the east is the West Hall.";
		map.get(8).hasItem = true;
		
		map.add(new Room(9, "Library", -1, 13, -1, -1));
		map.get(9).enterText = "The scent of old books fills the air. Rows and rows of bookshelves stacked to the ceiling fill the room. Perhaps you can find something useful here.\nTo the east is the West Hall.";
		map.get(9).hasItem = true;
		
		map.add(new Room(10, "Antechamber", 12, -1, 6, 11));
		map.get(10).enterText = "To the south is the Parlor. To the west is the Dungeon. To the north is that Dragon's Lair.";
		map.get(10).hasEncounter = true;
		map.get(10).hasItem = false;
		
		map.add(new Room(11, "Dungeon", -1, 10, -1, -1));
		map.get(11).enterText = "The imprisoned corpses of those who came before you lie in cells. Some of them may still have some gear.\nTo the east is the Antechamber.";
		map.get(11).hasEncounter = true;
		map.get(11).hasItem = true;
		
		map.add(new Room(12, "Dragon's Lair", -1, -1, 10, -1));
		map.get(12).enterText = "AHHH DRAGONN!!!!UHESUIGHSUIGSUGS U DED M8";
		map.get(12).hasEncounter = true;

		map.add(new Room(13, "West Hall", 9, 6, 8, -1));
		map.get(13).enterText = "The north end of the hall leads to the Library. The south end leads to the Dining Room. To the east is the Parlor.";
		
		map.add(new Room(14, "Spike Pit", -1, -1, -1, 2));
		map.get(14).enterText = "";
		
		return map;
	}
}
