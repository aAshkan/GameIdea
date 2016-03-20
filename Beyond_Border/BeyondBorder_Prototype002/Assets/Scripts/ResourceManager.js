#pragma strict

static var food = 200;
static var drink = 200;
static var oxygen = 300;
static var energy = 70;
static var clothes = 50;
static var money = 20;
 
function Start () {
	
	OnGUI();

}

function Update () { 
	
	OnGUI();
		if (ResourceManager.energy > 29 && ResourceManager.clothes > 0 && Input.GetKeyDown(KeyCode.Space)){
		UpdateResoure();
		//Debug.Log("Not enough ENERGY to move");
		//Debug.Log("in if");
}
	
	else if (ResourceManager.energy < 30){
		//Debug.Log("in else");	
		noEnergy();
}

	if (Input.GetKeyDown(KeyCode.C))
		energyConvertor();


}

function OnGUI () {
   
    GUI.Label (Rect (10, 10, 100, 20), "food 	: " + food);
    GUI.Label (Rect (10, 25, 100, 20), "drink 	: " + drink);
    GUI.Label (Rect (10, 40, 100, 20), "oxygen 	: " + oxygen);
    GUI.Label (Rect (10, 55, 100, 20), "energy 	: " + energy);
    GUI.Label (Rect (10, 70, 100, 20), "clothes	: " + clothes);
    GUI.Label (Rect (10, 85, 100, 20), "money 	: " + money);
    
}

function UpdateResoure () {
	//ResourceManager.food -= 30;
	//ResourceManager.drink -= 30;
	//ResourceManager.oxygen -= 30;
	ResourceManager.energy -= 25;
	ResourceManager.clothes -= 1;
	//ResourceManager.money -= 30;
}

function energyConvertor () {
	if (ResourceManager.food > 29 && ResourceManager.drink > 9 && ResourceManager.oxygen > 49){
		ResourceManager.food -= 30;
		ResourceManager.drink -= 10;
		ResourceManager.oxygen -= 50;
		ResourceManager.energy += 10;
		Debug.Log("Converting resources to ENERGY");
		
	}
	
	else
		//GUI.Label (Rect (100, 100, 100, 20), "Not enough resources to convert to ENERGY" );
	Debug.Log("Not enough resources to convert to ENERGY");
	
}


function noEnergy () {
	//GUI.Label (Rect (40, 13, 100, 20), "Not enough ENERGY to move!" );
	 //var message : String = "I am an NPC.";
//GUI.Label( Rect(10, 100, 100, 20), message);
Debug.Log("Not enough ENERGY to move");
//GUI.Label(Rect(100,100,20,10), "teas"); 
}
