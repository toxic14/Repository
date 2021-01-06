
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1,Ground,paper1;

function preload() {

	dustbingreen=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	green=createSprite(800,270,150,100);
	green.addImage(dustbingreen);
	green.scale=0.6;

	Ground = new ground(600,height-40,1200,20);
	paper1 = new ball(100,220,33,33);
	line1 = new dustbin(800,340,150,20);
	line2 = new dustbin(860,270,20,150);
	line3 = new dustbin(740,270,20,150);
	Engine.run(engine);

}

function draw() {
	background(225);
	Engine.update(engine);
	
  Ground.display();
  line1.display();
  line2.display();
  line3.display();
  paper1.display();	

  drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position, {

			x:45,
			y:-70

		});

   }
 }