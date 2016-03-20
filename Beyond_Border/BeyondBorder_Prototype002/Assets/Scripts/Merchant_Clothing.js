#pragma strict

static var clothes = 10;
static var money = 1;

function Start () {


}

function Update () {

//Buying Clothes
	 if(Input.GetKeyDown(KeyCode.Alpha0)) {
	 
		if (ResourceManager.money > 4 && Merchant_Clothing.clothes > 0){
			ResourceManager.money -= 5;
			ResourceManager.clothes++;
			Merchant_Clothing.clothes--;
			Debug.Log("Buying Clothes...");	
		}
		else if (ResourceManager.money < 5)
			Debug.Log("Don't have enough Money to Purchase Clothes");
		else if (Merchant_Clothing.clothes < 1)
			Debug.Log("Merchant doesn't have enough Clothes to sell");
	}		

}


