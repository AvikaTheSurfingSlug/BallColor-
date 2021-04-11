var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces


    ball = createSprite(0,200,10,10);
    ball.velocity = 2;
    ball.shapeColor = "white"
    //create box sprite and give velocity
    surface1 = createSprite(0,10,20,200);
    surface1.shapeColor = rgb(95,147,227);
    //blue :D
    surface2 = createSprite(0,366,20,200);
    surface2.shapeColor = rgb(220,64,50);
    //red :3
    surface3 = createSprite(0,280,20,200);
    surface3.shapeColor = rgb(0,133,66);
    //green :0
    surface4 = createSprite()
    surface4.shapeColor = rgb(247,179,1);
    //yellow ;P
    ball.bounceOff(surface1);
    ball.bounceOff(surface2);
    ball.bounceOff(surface3);
    ball.bounceOff(surface4);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display()


    //add condition to check if box touching surface and make it box
    if(ball.isTouching(surface1)){
        ball.shapecolor = rgb(95,147,227);
        playSound("music");
    }
    if(ball.isTouching(surface2)){
        ball.shapeColor = rgb(220,64,50);
        music.stop()
    }
    if(ball.isTouching(surface3)){
        ball.shapeColor = rgb(0,133,66);
    }
    if(ball.isTouching(surface4)){
        ball.shapecolor = rgb(247,179,1);
    }
}
