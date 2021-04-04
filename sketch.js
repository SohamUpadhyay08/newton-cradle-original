
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

	//Create the Bodies Here.
	

   paper = new Bob(200,400,30);
   paper2 = new Bob(230,400,30);
   paper3 = new Bob(260,400,30);
   paper4 = new Bob(290,400,30);
   paper5 = new Bob(320,400,30);
   ground = new Roof(500,250,170,20);

   rope1=new Rope(paper.body,ground.body,-30*2,0);
   rope2=new Rope(paper2.body,ground.body,-15*2,0);
   rope3=new Rope(paper3.body,ground.body,-0*2,0);
   rope4=new Rope(paper4.body,ground.body,15*2,0);
   rope5=new Rope(paper5.body,ground.body,30*2,0);


	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  ground.display();
  paper.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(paper.body,paper.body.position,{x:-5,y:-5}); } 
} 




