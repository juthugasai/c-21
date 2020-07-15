
var wall,thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor=color(255);
  wall=createSprite(1320,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
   bullet.velocityX=speed;
   bullet.velocityX=5;
    //Lbullet.velocityX=speed
    //Lbullet.velocityX=5
   Lbullet=speed
  bullet=speed;
  
}

function draw() {
  background(0);  
  //if(bullet.isTouching(wall)){
    //bullet.velocityX=0;
  //}
   
    //if(bullet.isTouching(wall)){
      //bullet.velocityX=0
    //}

  //bullet=thickness;
  //bullet=weight;
  
  Lwall = createSprite(100,200,50,400);
  Lbullet = createSprite(200,150,50,50);
  Lwall.shapeColor = "blue";
  Lbullet.shapeColor = "yellow";

 


 if(hascollided(Lbullet,Lwall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

   if(damage>10){
    wall.shapeColor=color(255,0,0);
   }

   if(damage<10){
    wall.shapeColor=color(0,255,0)
   }
 }


 drawSprites();
}


function hascollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x +Lbullet.width
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}