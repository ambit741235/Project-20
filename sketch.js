var backgroundImage, garden;
var cat, mouse, catImage, mouseImage, catImage2, mouseImage2, catImage3, mouseImage3;

function preload() {
    //load the images here
    backgroundImage = loadImage("images/garden.png");
    catImage = loadAnimation("images/cat1.png");
    mouseImage = loadAnimation("images/mouse1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImage3 = loadAnimation("images/cat4.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,50,50);
    garden.addImage(backgroundImage);

    cat = createSprite(600,610,50,50);
    cat.addAnimation("catFirstImage",catImage);
    cat.scale = 0.1;

    mouse = createSprite(200,610,50,50);
    mouse.addAnimation("mouseFirstImage",mouseImage);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(/*cat.x - mouse.x < cat.width/2 + mouse.width/2 && mouse.x - cat.x < cat.width/2 + mouse.width/2*/cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catStoppedImage",catImage3);
        cat.changeAnimation("catStoppedImage");
        cat.x = 270;

        mouse.addAnimation("mouseStoppedImage",mouseImage3);
        mouse.changeAnimation("mouseStoppedImage");
    }/*else{
        cat.changeAnimation("catFirstImage");
        mouse.changeAnimation("mouseFirstImage");
    }*/
    //text(mouseX + ',' + mouseY, 10, 45);
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImage2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",mouseImage2);
        mouse.changeAnimation("mouseTeasing");
    }

}
