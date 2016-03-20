 #pragma strict
 var vertexList = new Array();
 var lr : LineRenderer;
 function Start () {
     /*vertexList.push(Vector3(0, .2, 0));
     vertexList.push(Vector3(2, .2, 0));
     vertexList.push(Vector3(4, .2, 0));
     lr.SetVertexCount(vertexList.length);
     for(var i=0; i<vertexList.length; i++){
         lr.SetPosition(i, vertexList[i]);
     }*/
     OnGUI();
     
 }
 
 
  function OnGUI () {
    GUIUtility.ScaleAroundPivot (Vector2(0.5, 0.5), Vector2(328.0, 328.0));
    //GUI.Label (Rect (200, 200, 256, 256), Sprite.Create(line-m));
    
 }