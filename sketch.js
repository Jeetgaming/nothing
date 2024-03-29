const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var logie1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    logie1 = new Logie(810,260,300,PI);
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    logie2 = new Logie(810,180,300,PI);

    box5 = new Box(810,160,70,70);
    logie3 = new Logie(760,120,150,PI/7);
    logie4 = new Logie(870,120,150,-PI/7);

    bird = new Birdie(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    logie1.display();
    box3.display();
    box4.display();
    box5.display();
    logie2.display();
    logie3.display();
    logie4.display();
    pig2.display();
    bird.display(); 
}