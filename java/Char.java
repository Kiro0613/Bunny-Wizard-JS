import java.util.Random;

public class Char {
	public String name;
	public String race;
	
	public int hp;
	public int hpmax;
	public int mp;
	public int mpmax;

	public int atk;	// = 2 + (lvl/2) + wep
	public int def;
	public int speed;
	public int intel;
	public int stealth;

	public Xp xp = new Xp();
	class Xp {
		public int lvl;
		public int curxp;
		public int lvlxp;
	}
	
	public Weapon weapon = new Weapon();
	class Weapon {
		public int dmg;
		public String name;
	}
	
	public Armor armor = new Armor();
	class Armor {
		public int def;
		public String name;
	}
	
	public Spell spell = new Spell();
	class Spell {
		boolean hasHeal;
		public void heal() {
			if(hasHeal) {
				if(mp >= 4) {
					mp -= 4;
					if((hp+=5) >= hpmax) {
						System.out.println("Healed "+(hpmax - hp)+" HP!");
						hp += 5;
						hp = hpmax;
					} else {
						System.out.println("Healed 5 HP!");
						hp += 5;
					}
				} else {
					System.out.println("Not enough MP.");
				}
			} else {
				System.out.println("This spell is not known.");
			}
		}
		
		boolean hasLight;
		public boolean light() {
			if(hasLight) {
				if(mp >= 2) {
					mp -= 2;
					return true;
				} else {
					System.out.println("Not enough MP.");
				}
			} else {
				System.out.println("This spell is not known.");
			}
			return false;
		}
	}
	
	public Char (String name, String race, int hp, int mp, int wep, String wepName, int armor, String armorName, int atk, int def, int intel, int speed, int stealth, int lvl, int curxp, int lvlxp) {
		this.name = name;
		this.race = race;
		this.hp = hp;
		this.hpmax = hp;
		this.mp = mp;
		this.mpmax = mp;
		this.weapon.dmg = wep;
		this.weapon.name = wepName;
		this.armor.def = armor;
		this.armor.name = armorName;
		this.atk = atk;
		this.def = def;
		this.intel = intel;
		this.speed = speed;
		this.stealth = stealth;
		this.xp.lvl = lvl;
		this.xp.curxp = curxp;
		this.xp.lvlxp = lvlxp;
	}
	
	public static Char generate(String type, Char plr) {
		Char output = null;
		if(type.equals("Human")) {
			output = new Char("Player", "Human", 25, 10, 0, "Unarmed", 0, "None", 6, 2, 8, 3, 4, 1, 0, 15);
		} else if(type.equals("Bunny")) {
			output = new Char("Player", "Bunny", 20, 15, 0, "Unarmed", 0, "None", 4, 3, 5, 8, 5, 1, 0, 10);
			output.spell.hasHeal = true;
		} else if(type.equals("Elf")) {
			output = new Char("Player", "Elf", 15, 20, 0, "Unarmed", 0, "None", 3, 4, 4, 5, 7, 1, 0, 12);
			output.spell.hasHeal = true;
			output.spell.hasLight = true;
		} else if(type.equals("Librarian")) {
			output = new Char("Gertrude", "Librarian", 12, 20, 0, "Unarmed", 0, "None", 3, 3, 4, 5, 7, 1, 25, 12);
			output.spell.hasHeal = true;
			output.spell.hasLight = true;
		} else if(type.equals("Dragon")) {
			output = new Char("Leopold", "Dragon", 25, 25, 0, "Unarmed", 0, "None", 4, 3, 4, 5, 7, 1, 80, 12);
			output.spell.hasHeal = true;
			output.spell.hasLight = true;
		} else if(type.equals("Monster")) {
			Random rnum = new Random();
			int enemyhp = rnum.nextInt(5) + 3;
			int enemymp = rnum.nextInt(10) + 1;
			int enemyatk = rnum.nextInt(3) + 1;
			int enemydef = rnum.nextInt(2) + 1;
			int enemyintel = rnum.nextInt(3) + 1;
			int enemyspeed = rnum.nextInt(2) + 1;
			int enemystealth = rnum.nextInt(2) + 1;
			int enemylvl = rnum.nextInt(5) + 1;
			int xpDrop = rnum.nextInt((int) (plr.xp.lvlxp*0.8)) + 1;
			String[] monsterTypes = {"Skeleton", "Goblin", "Zombie", "Bat", "Squid Thing"};
			String monster = monsterTypes[rnum.nextInt(monsterTypes.length)];
			output = new Char("Monster", monster, enemyhp, enemymp, 0, "Unarmed", 0, "None", enemyatk, enemydef, enemyintel, enemyspeed, enemystealth, enemylvl, xpDrop, 1);
		}

		return output;
		
	}
}