#pragma strict

static var food = 100;
static var drink = 100;
static var oxygen = 100;

static var money = 100;

function Start () {


}

function Update () {

//Buying food
	 if(Input.GetKeyDown(KeyCode.Alpha1)) {
	 
		if (ResourceManager.money > 0 && Merchant_Primary.food > 7){
			ResourceManager.money--;
			ResourceManager.food += 8;
			Merchant_Primary.food -= 8;
			Debug.Log("Buying FOOD...");	
		}
		else if (ResourceManager.money < 1)
			Debug.Log("Don't have enough Money to Purchase FOOD");
		else if (Merchant_Primary.food < 8)
			Debug.Log("Merchant doesn't have enough FOOD to sell");
	}		
//Buying drink
	 if(Input.GetKeyDown(KeyCode.Alpha2)) {
	 
		if (ResourceManager.money > 0 && Merchant_Primary.drink > 1){
			ResourceManager.money--;
			ResourceManager.drink += 2;
			Merchant_Primary.drink -= 2;
			Debug.Log("Buying DRINK...");	
		}
		else if (ResourceManager.money < 1)
			Debug.Log("Don't have enough Money to Purchase DRINK");
		else if (Merchant_Primary.drink < 2)
			Debug.Log("Merchant doesn't have enough DRINK to sell");
	}
	
//Buying oxygen
	 if(Input.GetKeyDown(KeyCode.Alpha3)) {
	 
		if (ResourceManager.money > 0 && Merchant_Primary.oxygen > 9){
			ResourceManager.money--;
			ResourceManager.oxygen += 10;
			Merchant_Primary.oxygen -= 10;
			Debug.Log("Buying OXYGEN...");	
		}
		else if (ResourceManager.money < 1)
			Debug.Log("Don't have enough Money to Purchase OXYGEN");
		else if (Merchant_Primary.drink < 2)
			Debug.Log("Merchant doesn't have enough OXYGEN to sell");
	}
	
	
//Selling food
	 if(Input.GetKeyDown(KeyCode.Alpha5)) {
	 
		if (Merchant_Primary.money > 0 && ResourceManager.food > 11){
			ResourceManager.money++;
			ResourceManager.food -= 12;
			Merchant_Primary.food += 12;
			Debug.Log("Selling FOOD...");	
		}
		if (Merchant_Primary.money < 1)
			Debug.Log("Merchant doesn't have enough Money to Purchase FOOD");
		if (ResourceManager.food < 12)
			Debug.Log("Don't have enough FOOD to sell");
	}
			
//Selling drink
	 if(Input.GetKeyDown(KeyCode.Alpha6)) {
	 
		if (Merchant_Primary.money > 0 && ResourceManager.drink > 4){
			ResourceManager.money++;
			ResourceManager.drink -= 5;
			Merchant_Primary.drink += 5;
			Debug.Log("Selling DRINK...");	
		}
		if (Merchant_Primary.money < 1)
			Debug.Log("Merchant doesn't have enough Money to Purchase DRINK");
		if (ResourceManager.drink < 5)
			Debug.Log("Don't have enough DRINK to sell");
	}
	
//Selling oxygen
	 if(Input.GetKeyDown(KeyCode.Alpha7)) {
	 
		if (Merchant_Primary.money > 0 && ResourceManager.oxygen > 9){
			ResourceManager.money++;
			ResourceManager.oxygen -= 10;
			Merchant_Primary.oxygen += 10;
			Debug.Log("Selling OXYGEN...");	
		}
		if (Merchant_Primary.money < 1)
			Debug.Log("Merchant doesn't have enough Money to Purchase OXYGEN");
		if (ResourceManager.oxygen < 10)
			Debug.Log("Don't have enough OXYGEN to sell");
	}
	
	
	
	
	

}

