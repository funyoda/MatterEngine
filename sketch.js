const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World;
var gameEngine
var gameWorld
var ground,ball
var a
var b
function setup() {
  createCanvas(800,400);
  gameEngine = Engine.create();
  gameWorld = gameEngine.world;
  a={isStatic:true}
  
  ground = Bodies.rectangle(400,380,800,20,a)
  World.add(gameWorld,ground)
  //console.log(ground);
  b={restitution:0.8};
  ball = Bodies.circle(400,200,30,b)
  World.add(gameWorld,ball);
  console.log(ball);
}


function draw() {
  background(230,20,255);  
  
 

 Engine.update(gameEngine);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,20);
 ellipseMode(RADIUS);
 circle(ball.position.x,ball.position.y,30);
}