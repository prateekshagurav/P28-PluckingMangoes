
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango=[];


function preload()
{
	boyImg = loadImage("images/boy.png");
	treeImg = loadImage("images/tree.png");
	//bgImg = loadImage("images/sky-ground.webp")

}

function setup() {
	createCanvas(1000, 500);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-20,width,40);
	stone = new Stone(210,height-100,10);
	
	for(i=0;i<12;i++){
		randomX = Math.round(random(500,800));
		randomY = Math.round(random(height-400,height-250));
		mango[i] = new Mango(randomX,randomY,20);
		
	}

	sling = new Sling(stone.body,{x:220,y:height-110});
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  image(boyImg,200,height-140,100,150);
  image(treeImg,400,height-500,500,500);
  for(i=0;i<12	;i++){
	mango[i].display();
  }
  stone.display();
  sling.display();
  for(i=0;i<12	;i++){
	detectCollision(stone,mango[i]);
  }
  if(sling.bodyA == stone.body){
	text("Press 'space' for another chance",20,200)
  }


}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	sling.fly();
}
function detectCollision(Pstone,Pmango){
	stonePos = Pstone.body.position ;
	mangoPos = Pmango.body.position;
	stoneRadius = Pstone.body.circleRadius ;
	mangoRadius = Pmango.body.circleRadius;

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

	if(distance<=(stoneRadius+mangoRadius)){
		Matter.Body.setStatic(Pmango.body,false);
	}

}
function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(stone.body,{x:210,y:height-100})
		sling.attach(stone.body)
		
	}
}

