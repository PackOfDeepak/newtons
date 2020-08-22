
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/4,width/7,20);

	bobDiameter = 40;

	startBobPositionX = width/2;
	startBobPostionY = height/4+500;
	//Create the Bodies Here.
	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPostionY,bobDiameter);
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPostionY,bobDiameter);
	bob3 = new Bob(startBobPositionX,startBobPostionY,bobDiameter);
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPostionY,bobDiameter);
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPostionY,bobDiameter);
	

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2,0)
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*2,0)
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*2,0)
	rope5 = new Rope(bob5.body,roof.body,-bobDiameter*2,0)
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



