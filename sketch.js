const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,ground2,gr3;
var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9,bl10,bl11,bl12,bl13,bl14,bl15,bl16;
var ground4,gr5;
var polygon;
var polygonImg;
var sling;
function preload() {
	polygonImg=loadImage("polygon.png")
    
}
function setup(){
    createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

ground=new Ground(500,650,400,10);
ground2=new Ground(850,450,400,10);
gr3=new Ground(400,690,1600,20);
//ground4=new Ground(400,400,400,10);
//gr5=new Ground(600,200,400,20);
bl1=new Box(500,630,30,40,PI/2);
bl2=new Box(530,630,30,40,PI/2);
bl3=new Box(560,630,30,40,PI/2);
bl4=new Box(590,630,30,40,PI/2);
bl5=new Box(530,590,30,40,PI/2);
bl6=new Box(560,590,30,40,PI/2);
bl7=new Box(545,550,30,40,PI/2);
bl8=new Box(850,425,30,40,PI/2);
bl9=new Box(880,425,30,40,PI/2);
bl10=new Box(910,425,30,40,PI/2);
bl11=new Box(820,425,30,40,PI/2);
bl12=new Box(850,385,30,40,PI/2);
bl13=new Box(880,385,30,40,PI/2);
bl14=new Box(865,345,30,40,PI/2);
//bl15=new Box(500,630,30,40);
//bl16=new Box(500,630,30,40);
polygon=new Polygon(50,200,50,50);
sling=new SlingShot(polygon.body,{x:100,y:200});
	
	Engine.run(engine);

}
function draw(){
	background("red");
ground.display();
ground2.display();
gr3.display();
//ground4.display();
//gr5.display();
bl1.display();
bl2.display();
bl3.display();
bl4.display();
bl5.display();
bl6.display();
bl7.display();
bl8.display();
bl9.display();
bl10.display();
bl11.display();
bl12.display();
bl13.display();
bl14.display();
//bl15.display();
//bl16.display();
polygon.display();
sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
function keyPressed(){
	if(keyCode===32){
		sling.attach(polygon.body);
	}
}

