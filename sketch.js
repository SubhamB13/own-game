var bg;
var border;
var spaceShipImg,spaceShip1,spaceShip2Img,spaceShip2,bulletImg,thunderImg;
var astroidImg,astroid,bullet,thunder;
var starImg,star;
var life1 = 50;
var life2 = 50

function preload(){
    bg = loadImage("background.jpg");
    starImg = loadImage("star.png");
    astroidImg = loadImage("astroid.png");
    spaceShipImg = loadImage("spaceship1.png");
    spaceShip2Img = loadImage("spaceship2.png");
    bulletImg = loadImage("bullet.png");
    thunderImg = loadImage("thunder.png");
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight)

    spaceShip1 = createSprite(250,500,50,50);
    spaceShip1.addImage(spaceShipImg);
    spaceShip1.scale = 0.5;
    spaceShip1.rotation = 90;

    spaceShip2 = createSprite(1400,400,50,50);
    spaceShip2.addImage(spaceShip2Img);
    spaceShip2.scale = 0.5
    spaceShip2.rotation = -90

    


    border = createSprite(windowWidth/2,windowHeight/2,05,windowHeight)

    BulletG = new Group()
    BulletG1 = new Group()
    starG = new Group()

    spaceShip2.debug = true;
    spaceShip2.setCollider('circle',0,0,50);
}

function draw(){
    background(bg);

    spaceShip1.y = World.mouseY
    BulletG.y = World.mouseY

    spawnStars()
    spawnAstroid()

   // astroid.velocityY = 4;

    fill("white")
    textSize(40)
    text("life :" + life1,spaceShip1.x-220,spaceShip1.y+10)
    text.rotation = 90;

    fill("white")
    textSize(40)
    text("life :" + life2,spaceShip2.x+100,spaceShip2.y+10)
    text.rotation = 90;

    if(BulletG.collide(spaceShip2)){
       life2 +=-1;  
      BulletG.remove(bullet)
     bullet.visible = false;
   }

   if(BulletG1.collide(spaceShip1)){
    life1 +=-1;  
    BulletG.remove(bullet)
    bullet.visible = false;
}

   if(keyWentDown("UP_ARROW")){
       spaceShip2.velocityY =-4
   }
   if(keyWentUp("UP_ARROW")){
       spaceShip2.velocityY = 0
   }

   if(keyWentDown("DOWN_ARROW")){
    spaceShip2.velocityY =4
}
if(keyWentUp("DOWN_ARROW")){
    spaceShip2.velocityY = 0
}


    if(keyDown("F")){
        fireBullet()
    }
    if(keyDown("LEFT_ARROW")){
        fireBullet2()
    }
    
    if (keyWentDown("T")){

        thunder = createSprite(400,mouseY,20,20)
        thunder.addImage(thunderImg);
        thunder.scale = 0.5
        
    }
    if(keyWentUp("T")){
       thunder.destroy()
    }

    if(BulletG.collide(starG)){
        life1 +=5
        BulletG.destroyEach()
        starG.destroyEach()
    }

    drawSprites()

}
function fireBullet(){
    if(frameCount%08 === 0){
        bullet = createSprite(250,mouseY,20,20);
        bullet.addImage(bulletImg);
        bullet.scale=0.15
        bullet.rotation = 90
        bullet.velocityX = 10
        bullet.lifetime=110
        BulletG.add(bullet)
    }
}

function fireBullet2(){
    if(frameCount%08 === 0){
        bullet = createSprite(1400,spaceShip2.y,20,20);
        bullet.addImage(bulletImg);
        bullet.scale=0.15
        bullet.rotation = -90
        bullet.velocityX = -10
        bullet.lifetime=110
        BulletG1.add(bullet)
    }
}

function spawnStars(){
    if(frameCount%200 === 0){
        star = createSprite(random(windowHeight/2,windowWidth/2),600,50,50);
        star.addImage(starImg);
        star.scale = 0.1;
        star.lifetime = 200;
        starG.add(star);
    }
}

function spawnAstroid(){
    if(frameCount%500 === 0){
        astroid = createSprite(random(200,500),random(100,700),50,50);
         //astroid.y = Math.random(200,500)
       // astroid.x = Math.random(100,700)
        astroid.addImage(astroidImg);
        astroid.velocityX = 5;
        astroid.scale= 0.2
    }
}

function destroyBullets(){
   // bullet.visible = false;
}

   

    

    



    