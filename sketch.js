var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
speed=random(0,100);
weight=random(400,1500);
car=createSprite(50,200,20,20);
wall=createSprite(800,200,30,200);
car.velocityX=speed;
}
 
function draw() {
  background(0,0,0);  
 if(wall.x-car.x<=(car.width+wall.width/2)){
   car.x=775;
   var deformation=0.5*weight*speed*speed/22500;
 }
 
 if(deformation>180){
  car.shapeColor="red";
}
if(deformation>100&&deformation<180){
  car.shapeColor="yellow";
}
if(deformation<100){
  car.shapeColor="green"; 
}
  drawSprites();
}