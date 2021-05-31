var ship;
var shipImg;

var sea;
var seaImg

function preload(){
seaImg=loadImage("sea.png")
shipImg=loadAnimation("ship1.png","ship2.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400)
  sea.addImage("c",seaImg)
  sea.velocityX=-1
  ship=createSprite(200,300,20,20)
  ship.addAnimation("sp",shipImg)
  ship.scale=0.2
}

function draw() {
background("blue");
 drawSprites()
 if (sea.x<0){
 sea.x=sea.width/2;
}
}