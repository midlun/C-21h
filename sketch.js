var canvas;
var music;
var b1, b2, b3, b4;
var ball;

function preload()
{
    music = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1 = createSprite(100,580,190,20);
    b1.shapeColor = "green";
    b2 = createSprite(300,580,190,20);
    b2.shapeColor = "red";
    b3 = createSprite(500,580,190,20);
    b3.shapeColor = "blue";
    b4 = createSprite(700,580,190,20);
    b4.shapeColor = "yellow";

    //create box sprite and give velocity
    ball = createSprite(random(20,750),50,20,20);
    ball.shapeColor = "white";
    ball.velocityX = 2;
    ball.velocityY = 2;

}

function draw() 
{
    background(rgb(169,169,169));
    //create edgeSprite




    //add condition to check if box touching surface and make it box
    if(b1.isTouching(ball) && ball.bounceOff(b1))
    {
        ball.shapeColor = "green";
        music.play();
    }

    if(b2.isTouching(ball) && ball.bounceOff(b2))
    {
        ball.shapeColor = "red";
        music.play();
    }

    if(b3.isTouching(ball) && ball.bounceOff(b3))
    {
        ball.shapeColor = "blue";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if(b4.isTouching(ball) && ball.bounceOff(b4))
    {
        ball.shapeColor = "yellow";
        music.play();
    }

    drawSprites();
}
