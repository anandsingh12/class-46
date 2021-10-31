var bg, bgImg;
var spaceship, spaceshipImg;
var meteroid, meteroidImg;
var bullet, bulletImg;
var bulletGroup,meteroidGroup;
var score = 0;
function preload (){
    bgImg  = loadImage("space.png");
    spaceshipImg = loadImage("spaceship.png");
    meteroidImg = loadImage("meteroid.png");
    bulletImg = loadImage("bullet.png");
}

function setup(){
    createCanvas(700,600);
    bg = createSprite(600,300);
    bg.addImage(bgImg);
    bg.scale = 2;
    bg.velocityX = -3;


    spaceship = createSprite(50,550);
    spaceship.addImage(spaceshipImg);
    spaceship.scale = 0.5;

    meteroidGroup = new Group;
    bulletGroup= new Group;

    score = 0;
    stroke("red");
    fill("red");
    textSize(20);
    
}

function draw(){
    background(0);

    if (bg.x <50){
        bg.x = bg.width/2;
      }

      if(keyDown("UP_ARROW")){
        spaceship.y = spaceship.y - 4;
      
      }
      if(keyDown("DOWN_ARROW")){
        spaceship.y = spaceship.y + 4;
      
      }
      
        
      if(keyDown("LEFT_ARROW")){
        spaceship.x = spaceship.x - 4;
       
      }
      if(keyDown("RIGHT_ARROW")){
        spaceship.x = spaceship.x + 4;
      
      }

     if(keyDown("space")){
       bullet = createSprite(spaceship.x, spaceship.y);
       bullet.addImage(bulletImg);
       bullet.velocityX = 5;
      bullet.scale = 0.25;
       bulletGroup.add(bullet);
       
     }
      if(bulletGroup.isTouching(meteroidGroup)){
        meteroidGroup[0].destroy();
        bulletGroup[0].destroy();
bulletGroup.setVisibleEach(false);
        score = score+50;

      }
     
      spawnMeteroids();
      drawSprites();
      text("Score:"+score,300, 50);
}

function spawnMeteroids(){
  if(World.frameCount % 100 === 0){
    meteroid = createSprite(700 ,300);
  meteroid.addImage(meteroidImg);
  meteroid.velocityX = -4;
  meteroid.y = Math.round(random(600, 50));
  meteroidGroup.add(meteroid);
  meteroid.scale = 0.5;
  
  }
}