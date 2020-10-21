
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var wall1,wall2,floor1,wall3;
var paper1;

function preload()
{ 
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,40);

	floor1 = new Dustbin(605,650,200,20);
	wall1 = new Dustbin(505,620,20,40);
	wall2 = new Dustbin(705,610,20,100);
	wall3 = new Dustbin(708,520,20,100);
	roof1 = new Dustbin(618,460,200,20);
	

	paper1 = new Paper(100,400,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  roof1.display();
  floor1.display();
  paper1.display();
      Throw();
  drawSprites();

 
}
function Throw(){
	if(keyCode===UP_ARROW){


		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2,y:-3.5});



	}





}



