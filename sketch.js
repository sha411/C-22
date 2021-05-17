const Engine= Matter.Engine 
const World = Matter.World
const Bodies= Matter.Bodies  

var myengine, myworld


function setup() {
  createCanvas(400,400);
myengine = Engine.create()
myworld =  myengine.world   

var options = {
isStatic:true

}
ground = Bodies.rectangle(200, 390, 400, 10,options)
World.add(myworld,ground)

var balloptions = {
restitution: 1 
  
  }
ball =  Bodies.circle(200,200,50,balloptions)
  World.add(myworld,ball)
}

function draw() {
  background('blue');
  Engine.update(myengine)  
  rectMode(CENTER)
  
  
  
  rect(ground.position.x,ground.position.y,410,10);
  circle(ball.position.x,ball.position.y,50)
}