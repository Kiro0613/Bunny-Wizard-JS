import java.util.Random;
public class dungeon {

	public static void main(String[] args) {
		//Intro
		System.out.println("DUNGEON CRAAAWWWWLL!!!");
		
		//Initializing player
		Random rnum = new Random();
		int plrHealth = 100;
		int plrDmg = rnum.nextInt(5) + 1;
		int killCt = 0;
		
		//Creating monster
		int enemHealth = rnum.nextInt(10) + 1;
		int enemDmg = rnum.nextInt(3) + 1;
		String[] monsterTypes = {"Skeleton", "Goblin", "Zombie", "Ogre"};
		String monster = monsterTypes[rnum.nextInt(monsterTypes.length)];
		
		//New encounter text (for first exec)
		System.out.println("A wild "+monster+" appears!");
		System.out.println("You have "+plrHealth+" health");
		System.out.println("Enemy has "+enemHealth+" health");
		
		//Main fight loop
		while(plrHealth > 0) {
			//Attack
			plrDmg = rnum.nextInt(5) + 1;
			enemDmg = rnum.nextInt(3) + 1;
			plrHealth -= enemDmg;
			enemHealth -= plrDmg;
			
			//Give info to player
			System.out.println("You attack for "+plrDmg+" damage!");
			System.out.println("Enemy attacks for "+enemDmg+" damage!");
			System.out.println("You have "+plrHealth+" health");
			System.out.println("Enemy has "+enemHealth+" health");
			
			//If enemy dies, generate new one
			if(enemHealth <= 0) {
				killCt++;
				System.out.println("The "+monster+" has been defeated!");
				enemHealth = rnum.nextInt(10) + 1;
				monster = monsterTypes[rnum.nextInt(monsterTypes.length)];
				System.out.println("A wild "+monster+" appears!");
			}
			
		}
		
		//Outro
		System.out.println("Player died to a "+monster+" after defeating "+killCt+" enemies!");
	}

}
