var waypointActivationDistance: float = 1.0;	// How far should player be to waypoint for its activation and choosing new
var speed : float = 6f;            // The speed that the player will move at.
//var callFunction: String;		// Call function with this name, when Mover object rich the waypoint
//var callExitFunction: String;	// Call function with this name, when Mover object leaves the waypoint
//public var EnemyPrefab: GameObject;
//public var Enemies: GameObject[];

public var waypointPre: GameObject;
public var waypoints: GameObject[];
public var waypointsPosition : Vector3[];

private var movement : Vector3;                   // The vector to store the direction of the player's movement.
//private var anim : Animator;                      // Reference to the animator component.
private var playerRigidbody : Rigidbody;          // Reference to the player's rigidbody.
private var floorMask : int;                      // A layer mask so that a ray can be cast just at gameobjects on the floor layer.
private var camRayLength : float = 100f;          // The length of the ray from the camera into the scene.
private var inMove: boolean = false;			  // Is player moving






function Awake ()
{
	waypointsPosition = new Vector3[100];
	
	//Debug.Log("Player's Turn: "+ TurnControl.isPlayerTurn);
	//Debug.Log("AI's Turn: "+ TurnControl.isAiTurn);
	
	var counter : int;
	counter = 0;
	for (var waypoint : GameObject in GameObject.FindGameObjectsWithTag("Waypoint")){
		//Debug.Log("Waypoints: " + waypoint);
		waypointsPosition[counter] = waypoint.transform.position;
		counter++;
		//Debug.Log("WaypointPosition: " + waypointsPosition);
		
		
	}
	//var print;
	
	//print = waypointsPosition[3].;
//	waypointsPosition[0]
	//Debug.Log("print: "+ print);
	//Debug.Log("WaypointPosition: " + waypointsPosition);
	
	//Debug.Log("WaypointPosition: " + waypointsPosition[0]);
	//Debug.Log("WaypointPosition: " + waypointsPosition[1]);
	//Debug.Log("WaypointPosition: " + waypointsPosition[2]);
	//Debug.Log("WaypointPosition: " + waypointsPosition[3]);
	//Debug.Log("WaypointPosition: " + waypointsPosition[4]);
	//Debug.Log("WaypointPosition: " + waypointsPosition[5]);

/*	var test = "empty";
	if (waypoints == null)
		waypoints = GameObject.FindGameObjectsWithTag("Waypoint");
	for (var waypoint: GameObject in waypoints){
		//Instantiate(waypointPre, waypoint.transform.position, waypoint.transform.rotation);
		 test = waypoint.transform.position.ToString();
		 Debug.Log("test: " + test);
	}
Debug.Log("test: " + test);
*/
	//Debug.Log("waypointPre: " + waypointPre.ToString());
	//Debug.Log("waypoints: " + waypoints[1].string);
//	Debug.Log("waypoint: " + waypoint);
	//Debug.Log("waypoint: " + waypoint);
/*
	if (Enemies == null)
		Enemies = GameObject.FindGameObjectsWithTag("Enemy");
	for (var Enemy: GameObject in Enemies) {
		Instantiate(EnemyPrefab, Enemy.transform.position, Enemy.transform.rotation);
	}
*/

	

    // Create a layer mask for the floor layer.
    floorMask = LayerMask.GetMask ("Floor");
    //Debug.Log("ttt");

    // Set up references.
  //  anim = GetComponent (Animator);
    playerRigidbody = GetComponent (Rigidbody);
}


function FixedUpdate ()
{
/*
	if (Enemies == null)
		Enemies = GameObject.FindGameObjectsWithTag("Enemy");
	for (var Enemy: GameObject in Enemies) {
		Instantiate(EnemyPrefab, Enemy.transform.position, Enemy.transform.rotation);
	}
*/
    // Store the input axes.
    var h : float = Input.GetAxisRaw ("Horizontal");
    var v : float = Input.GetAxisRaw ("Vertical");

	//if (waypointsPosition[0].////
//	Debug.Log("Player: " + GameObject.FindGameObjectWithTag("Player").transform.position);
	
	//Debug.Log ("SS " + h + v);
	
    // Move the player around the scene.
  //  var test = EnemyPrefab.GetComponent("movementSpeed");
  //  if (EnemyPrefab.isMove)
	//if (TurnControl.isPlayerTurn)

	/*	
	if (ResourceManager.energy > 29 && ResourceManager.clothes && Input.GetKeyDown(KeyCode.Space))
		UpdateResoure();
	else{
		//Debug.Log("Here");
		noEnergy();
}

	if (Input.GetKeyDown(KeyCode.C))
		energyConvertor();

	*/	
    	Move (h, v);
	//var deltaX = Mathf.Abs(GameObject.FindGameObjectWithTag("Player").transform.position.x/2 - waypointsPosition[i])
	
	//if (GameObject.FindGameObjectWithTag("Player").transform.position.x/2 - wa

	//Debug.Log("WaypointPosition: " + waypointsPosition[0]);
  //if GameObject.FindGameObjectsWithTag
	
    // Turn the player to face the mouse cursor.
    Turning ();

    // Animate the player.
   // Animating (h, v);
}


function Move (h : float, v : float)
{
    // Set the movement vector based on the axis input.
    movement.Set (h, 0f, v);
    
    // Normalise the movement vector and make it proportional to the speed per second.
    movement = movement.normalized * speed * Time.deltaTime;

    // Move the player to it's current position plus the movement.
    playerRigidbody.MovePosition (transform.position + movement);
}


function Turning ()
{
    // Create a ray from the mouse cursor on screen in the direction of the camera.
    var camRay : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);

    // Create a RaycastHit variable to store information about what was hit by the ray.
    var floorHit : RaycastHit;

    // Perform the raycast and if it hits something on the floor layer...
    if(Physics.Raycast (camRay, floorHit, camRayLength, floorMask))
    {
        // Create a vector from the player to the point on the floor the raycast from the mouse hit.
        var playerToMouse : Vector3  = floorHit.point - transform.position;

        // Ensure the vector is entirely along the floor plane.
        playerToMouse.y = 0f;

        // Create a quaternion (rotation) based on looking down the vector from the player to the mouse.
        var newRotation : Quaternion = Quaternion.LookRotation (playerToMouse);

        // Set the player's rotation to this new rotation.
        playerRigidbody.MoveRotation (newRotation);
    }
}

/*
function Animating (h : float, v : float)
{
    // Create a boolean that is true if either of the input axes is non-zero.
    var walking : boolean = h != 0f || v != 0f;

    // Tell the animator whether or not the player is walking.
    anim.SetBool ("IsWalking", walking);
}
*/

// Return true if player is moving now
function isMoving (): boolean 
{
	return inMove; 
}
//----------------------------------------------------------------------------------

//Activate Ai's Turn
function isAi()
{	
	TurnControl.isPlayerTurn = false;
	TurnControl.isAiTurn = true;
	
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
	}
	
	else
		GUI.Label (Rect (100, 100, 100, 20), "Not enough resources to convert to ENERGY" );
	
	
}

function noEnergy () {
	//GUI.Label (Rect (40, 13, 100, 20), "Not enough ENERGY to move!" );
	 var message : String = "I am an NPC.";
GUI.Label( Rect(Screen.width/2, Screen.height/2, 0, 0), message);
//GUI.Label(Rect(100,100,20,10), "teas"); 
}
