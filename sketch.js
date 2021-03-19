//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var player , BG, home;
var Man,Croud1;
var Medow;
var CroudGroup;
var Score=0;
var home;

function preload(){
  Man=loadAnimation("Man11.png","Man12.png");
  Croud1=loadImage("Croud11.png");
  Croud2=loadImage("Croud12.png");
  Croud3=loadImage("Croud13.png");
  Croud4=loadImage("Croud14.png");
  Croud5=loadImage("Croud15.png");
  Medow = loadImage("Medow2.jpg");
  home = loadImage("Home.jpeg");
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  BG=createSprite(width/2,height/2,width,height);
  BG.addImage(Medow);
  BG.scale=1.5;
  BG.velocityY=2;
  BG.y=BG.height/2;
  player=createSprite(width/2,height-70,50,50);
  player.addAnimation("Walking",Man)
  player.scale=0.4  
  CroudGroup=new Group();
}

function draw() {
  background(255);
  if(gameState==PLAY){
    Croud();
    if(BG.y>height){
      BG.y=BG.height/2;
    }
    if(player.isTouching(CroudGroup)){
      Score++;
      CroudGroup.pop();
    }
    if(Score==100){ 
      gameState=END;
    }
  }
  else if(gameState==END){ 
    CroudGroup.setLifetimeEach(0);
    CroudGroup.destroyEach();
    BG.velocityY=0;
    var endGame=createSprite(width/2,height/2,width,height)
    endGame.addImage(home);
    endGame.scale=1.2;
    player.destroy();

  }

  drawSprites();
  textSize(35);
  fill("white");
  text(Score,width-300,100);
  
}
function keyPressed(){
  if (keyIsDown(RIGHT_ARROW) ) {
    player.x+=20;
}
if (keyIsDown(LEFT_ARROW)) {
  player.x-=20;
}
}
function Croud(){
if(frameCount%120==0){
  var Peeps=createSprite(random(50,width-50),-(random(0,200)),50,50);
    Peeps.velocityY=3;
  Peeps.scale = 0.5;
  CroudGroup.add(Peeps)
  var num =Math.round( random(1,5));  
  switch (num){
    case 1: Peeps.addImage(Croud1);
    break; 
    case 2: Peeps.addImage(Croud2);
    break;
    case 3: Peeps.addImage(Croud3);
    break;
    case 4: Peeps.addImage(Croud4);
    break;
    case 5: Peeps.addImage(Croud5);
    break;
    default:break;
  }

  CroudGroup.push(Peeps)

  
}
}
