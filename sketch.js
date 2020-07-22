//Global Variables

var background,score,obstacleGroup,backImage2,bananaImage,backImage,monkey,monkeyImage,obstacleImage,obstacle;



function preload(){
  monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 backImage=loadImage("jungle.jpg");
  obstacle=loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  //score=0;
 backImage=createSprite(200,200,10,10); 
  backImage.addImage("jungle.jpg",backImage);
}


function draw(){
 background(255); 
}