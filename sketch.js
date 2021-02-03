const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var g1,p1;

var particle =[];
var plinkos=[];
var divisions=[];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  g1 = new ground(240,795,480,10); 
//divisions
  for(var d=0 ; d<=width ; d =d+80){
    divisions.push(new Division(d,height-divisionHeight/2,10,divisionHeight));
 }

 // plinkos
 for (var j = 55; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 20; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,175));
 }

  for (var j = 55; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,275));
 }

  for (var j = 20; j <=width-10; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,375));
 }



}

function draw() {
  background(0); 
  Engine.update(engine);
  //division
  for (var d = 0; d < divisions.length; d++) {
     
    divisions[d].display();
    }
  //plinkos
  for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
    
  }
  //paricles
  if(frameCount%60===0){
    particle.push(new particles(random(width/2-10, width/2+10), 10,10));
    
  }
  
  for (var l = 0; l < particle.length; l++) {
  
    particle[l].display();
  }
    
  g1.display();
 
  drawSprites();
}