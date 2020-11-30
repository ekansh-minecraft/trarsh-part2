
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ballObj
var dustbinObj
var groundObj
var READY = 5
var LAUNCED = 90
var shootState = READY


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world; 

     
	groundObj = new Ground(width/2,665,4000,10, world)
	ballObj = new paperBall(width/2-150,393, 20,world)
	dustbinObj = new dustbin(width/2+130,600,100,100,world)
	
    
     
	Engine.run(engine);
}
 
function keyPressed()
{
   
}


function draw() {
  rectMode(CENTER);	
  background("turquoise");

  groundObj.display()
  ballObj.display()
  dustbinObj.display()

  keyPressed()


  if(shootState == READY)
  {
	if(keyCode == UP_ARROW)
	{
		console.log("working - 1")
		Matter.Body.applyForce(ballObj.paper,ballObj.paper.position,{x:0.09,y:-0.3})
		shootState = LAUNCED
	}
  }

  if(shootState == LAUNCED)
  {
	  textSize(19)
	  text("press r to reset",100,302)
	  if(keyDown("r"))
	  {
		  shootState = READY
	  }
  }

  drawSprites();

}

