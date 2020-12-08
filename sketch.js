
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	bob1 = new Bob(400,500,150); 
	bob2 = new Bob(550,500,150); 
	bob3 = new Bob(700,500,150);
	bob4 = new Bob(850,500,150); 
	bob5 = new Bob(1000,500,150);
	roof = new Ground(700,50,900,40); 
	rope1 = new Rope(bob1.body,roof.body,-50*6,0); 
	rope2 = new Rope(bob2.body,roof.body,-50*3,0); 
	rope3 = new Rope(bob3.body,roof.body,-0*2,0);
	rope4 = new Rope(bob4.body,roof.body,50*2.9,0);
	rope5 = new Rope(bob5.body,roof.body,50*6,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,250,250);
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:-195});
 } 

if (keyCode === DOWN_ARROW) 
	{ Matter.Body.applyForce(bob5.body,bob5.body.position,{x:55,y:45}); 
} 
} 

	function drawLine(constraint) { 
		bobPosition = constraint.bodyA.position 
		roofPosition = constraint.bodyB.position 
		roofBodyOffset = constraint.pointB; 
		roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
		roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
		line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY); 
	}

