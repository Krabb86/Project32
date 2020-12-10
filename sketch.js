const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var b0,b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b10,b11,b12,b13,b14,b15,b16,b17,b18;
var b20,b21,b22,b23,b24,b25,b26,b27;
var b30,b31,b32,b33,b34,b35,b36;
var b40,b41,b42,b43,b44,b45;
var b50,b51,b52,b53,b54;
var b60,b61,b62,b63;
var b70,b71,b72;
var b80,b81;
var b90;
var polygon,slingShot;
var points = 0;




function setup() {
  createCanvas(1000,600);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  stand = new Stand(700,500,420,40);

 

  

  b0 = new Blocks(520,460,40,40);
  b1 = new Blocks(560,460,40,40);
  b2 = new Blocks(600,460,40,40);
  b3 = new Blocks(640,460,40,40);
  b4 = new Blocks(680,460,40,40);
  b5 = new Blocks(720,460,40,40);
  b6 = new Blocks(760,460,40,40);
  b7 = new Blocks(800,460,40,40);
  b8 = new Blocks(840,460,40,40);
  b9 = new Blocks(880,460,40,40);
  
  b10 = new Blocks(540,420,40,40);
  b11 = new Blocks(580,420,40,40);
  b12 = new Blocks(620,420,40,40);
  b13 = new Blocks(660,420,40,40);
  b14 = new Blocks(700,420,40,40);
  b15 = new Blocks(740,420,40,40);
  b16 = new Blocks(780,420,40,40);
  b17 = new Blocks(820,420,40,40);
  b18 = new Blocks(860,420,40,40);

  b20 = new Blocks(560,380,40,40);
  b21 = new Blocks(600,380,40,40);
  b22 = new Blocks(640,380,40,40);
  b23 = new Blocks(680,380,40,40);
  b24 = new Blocks(720,380,40,40);
  b25 = new Blocks(760,380,40,40);
  b26 = new Blocks(800,380,40,40);
  b27 = new Blocks(840,380,40,40);

  b30 = new Blocks(580,340,40,40);
  b31 = new Blocks(620,340,40,40);
  b32 = new Blocks(660,340,40,40);
  b33 = new Blocks(700,340,40,40);
  b34 = new Blocks(740,340,40,40);
  b35 = new Blocks(780,340,40,40);
  b36 = new Blocks(820,340,40,40);
  
  b40 = new Blocks(600,300,40,40);
  b41 = new Blocks(640,300,40,40);
  b42 = new Blocks(680,300,40,40);
  b43 = new Blocks(720,300,40,40);
  b44 = new Blocks(760,300,40,40); 
  b45 = new Blocks(800,300,40,40);

  b50 = new Blocks(620,260,40,40);
  b51 = new Blocks(660,260,40,40);
  b52 = new Blocks(700,260,40,40);
  b53 = new Blocks(740,260,40,40);
  b54 = new Blocks(780,260,40,40);
  
  b60 = new Blocks(640,220,40,40);
  b61 = new Blocks(680,220,40,40);
  b62 = new Blocks(720,220,40,40);
  b63 = new Blocks(760,220,40,40);

  b70 = new Blocks(660,180,40,40);
  b71 = new Blocks(700,180,40,40);
  b72 = new Blocks(740,180,40,40);

  b80 = new Blocks(680,140,40,40);
  b81 = new Blocks(720,140,40,40);
  
  b90 = new Blocks(700,100,40,40);
  
  polygon = new Polygon(100,200,60,60);

  slingShot = new SlingShot(polygon.body,{x:250, y:200});

  
  
 








}

function draw() {

  Engine.update(engine);
  drawSprites();
  
        background("gray");
    
        noStroke();
        textSize(35)
        fill("red")
        text("Score  " + points, width-300, 50)
    

  stand.display();

  b0.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
 
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();

  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();

  
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();

  b40.display();
  b41.display();
  b42.display();
  b43.display();
  b44.display();
  b45.display();

  b50.display();
  b51.display();
  b52.display();
  b53.display();
  b54.display();

  b60.display();
  b61.display();
  b62.display();
  b63.display();

  b70.display();
  b71.display();
  b72.display();

  b80.display();
  b81.display();

  b90.display();

  


  slingShot.display();
  polygon.display();

  
  b0.score();
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();

  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();

  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();
  b26.score();
  b27.score();

  b30.score();
  b31.score();
  b32.score();
  b33.score();
  b34.score();
  b35.score();
  b36.score();

  b40.score();
  b41.score();
  b42.score();
  b43.score();
  b44.score();
  b45.score();

  b50.score();
  b51.score();
  b52.score();
  b53.score();
  b54.score();

  b60.score();
  b61.score();
  b62.score();
  b63.score();

  b70.score();
  b71.score();
  b72.score();
 
  b80.score();
  b81.score();
 
  b90.score();
 
 

 


 

  

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
 if(keyCode === 32){
     slingShot.attach(polygon.body);

 }


}

