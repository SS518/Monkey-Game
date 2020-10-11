
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 300);
  
  monkey = createSprite(50,240,10,20)
  monkey.addAnimation("play",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,280,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  score = 0;
}


function draw() {
  background("white");
  
  textSize(20);
  text("Score: "+ score, 500,50);

  survivalTime=Math.ceil(frameCount/10)
  text("Survival Time " + survivalTime,20,50);
  
  
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score = score + 1;
    
  }
  
  if(obstacleGroup.isTouching (monkey) ){
    obstacleGroup.destroyEach();
    ground.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
    obstacleGroup.visible = false;
    bananaGroup.visible = false;
    
    
  }
  
  monkey.collide(ground);
  
  if(ground.x<450){
    ground.x = ground.width /2;
  }
  
  if(keyDown("space") && monkey.y >= 239) {
      monkey.velocityY = -15;
    }
   monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  
  spawnbanana ();
  spawnobstacles();
 
  drawSprites();
}

function spawnbanana () {
  if(frameCount % 140 === 0){
    banana = createSprite(590,Math.round(random(120,200)),10,10)
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    
    banana.lifetime = 150;
    
    
    bananaGroup.add(banana);
  }
  
}

function spawnobstacles(){
   if(frameCount % 300 === 0){
    obstacle = createSprite(590,256,10,10)
    obstacle.addImage( obstaceImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.1;
    
    obstacle.lifetime = 100;
    
    
    obstacleGroup.add(obstacle);
}

}



