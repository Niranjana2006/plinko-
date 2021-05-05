const Engine = Matter.Engine,
     World = Matter.World,
     Events = Matter.Events,
     Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var plinkos = [];
var divisions=[]
var divisionHeight=200;


function setup() 
{
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(799,790,1600,20);



    for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

}

function draw()
{ 
  if(frameCount % 60 === 0)
  {
    particle=new Particle(random(120,400),0,7,random(0,360));
    particles.push(particle);
  }

background(0);
Engine.update(engine);


for(var n = 0; n < particles.length; n++){
  particles[n].display();
 }

  for(var i = 0; i<divisions.length;i++){
  divisions[i].display();
}
   for(var r = 0; r<plinkos.length;r++){
    plinkos[r].display();
  
}

ground.display();   

}