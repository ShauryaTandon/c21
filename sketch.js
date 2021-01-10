var fRect, mRect; rectangle3

function setup() {
  createCanvas(1200,800);
  fRect = createSprite(600, 400, 50, 80);
  fRect.shapeColor = "green";
  mRect = createSprite(400,200,80,30);
  mRect.shapeColor = "green";
  rectangle3= createSprite(1000,400,50,50)
  rectangle3.shapeColor= "green"
  rectangle3.velocityX=-3
  fRect.velocityX=3
}

function draw() {
  background(0,0,0);  
  mRect.x = World.mouseX;
  mRect.y = World.mouseY;

  
  drawSprites();

if(collide(fRect,rectangle3)){
  fRect.velocityX=fRect.velocityX*(-1);
  rectangle3.velocityX=rectangle3.velocityX*(-1);


}
}

