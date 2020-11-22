// var fixedRect;
var movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4; 
function setup() {
  createCanvas(800,400);
  //fixedRect = createSprite(400, 200, 50, 50);
  //fixedRect.shapeColor = "green";
  movingRect = createSprite(500, 200, 80, 50);
  movingRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect.debug = true;
  gameObject1 = createSprite (200, 200, 80, 50);
  gameObject1.shapeColor = "green"
  gameObject2 = createSprite(300, 200, 80, 50);
  gameObject2.shapeColor = "green"
  gameObject3 = createSprite (100, 200, 80, 50);
  gameObject3.shapeColor = "green"
  gameObject4 = createSprite (400, 200, 80, 50);
  gameObject4.shapeColor = "green"
}
var changeColor = function(gameObject){
  if(isTouching(movingRect, gameObject)){
    movingRect.shapeColor = "red";
    gameObject.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject.shapeColor = "green";
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  changeColor(gameObject1);
  changeColor(gameObject2);
  changeColor(gameObject3);
  changeColor(gameObject4);
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width / 2 + object2.width / 2 && object2.x - object1.x < object1.width / 2 + object2.width
     && object2.y - object2.y < object1.height / 2 + object2. height && object2. y - object1.y < object1.height + object2.height)
  {
    return true;
  }
  else{
    return false;
  }
}