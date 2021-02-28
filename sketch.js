var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;
var garden, gardenImg;
function preload() {
    //load the images here
    gardenImg = loadAnimation("garden.png");

    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    
    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(900,700);
    garden.addAnimation(gardenImg);

    //create tom and jerry sprites here
    cat = createSprite(600,500);
    cat.addAnimation(catImg1);

    mouse = createSprite(200,500);
    mouse.addAnimation(mouseImg1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (mouse.x - cat.x > mouse.width/2 + cat.width/2 &&
        cat.x - mouse.x > cat.width/2 + mouse.width/2 &&
        mouse.y - cat.y > mouse.height/2 + cat.height/2 &&
        cat.y - mouse.y > cat.height/2 + mouse.height/2)
        {
            cat.changeAnimation(catImg3);
            cat.setVelocityX = 0;
            mouse.changeAnimation(mouseImg3);
        }
        else
        {
            cat.changeAnimation(catImg2);
            mouse.changeAnimation(mouseImg2);
        }

    drawSprites();
}
 

function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW)
  {
      cat.setVelocityX = -2;
      cat.changeAnimation("runningCat",catImg2);
  }
 

}
