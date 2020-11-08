var ballSize = 40;
var score =0;
var img;
var gameState= "L0";
var ballscored= 0;
var ballscored1= 0;
var ballscored2= 0;
var ballscored3= 0;
var ballscored4= 0;
var ballscored5= 0;


function preload() {

  startpage = loadImage('https://zoebrazil.github.io/gameimages/startpage.png');
  endpage = loadImage('https://zoebrazil.github.io/gameimages/endpage.png');
  bee = loadImage('https://zoebrazil.github.io/gameimages/bee.png');
  flower01 = loadImage('https://zoebrazil.github.io/gameimages/flower01.png');
  flower02 = loadImage('https://zoebrazil.github.io/gameimages/flower02.png');
  flower03 = loadImage('https://zoebrazil.github.io/gameimages/flower03.png');
  flower04 = loadImage('https://zoebrazil.github.io/gameimages/flower04.png');
  flower05 = loadImage('https://zoebrazil.github.io/gameimages/flower05.png');
  robot = loadImage('https://zoebrazil.github.io/gameimages/robotflower.png');
  
} //end preload

function setup() {
  createCanvas(800, 800);
    textAlign(CENTER);
  noCursor();
} // end setup


function draw() {
  background(250);
  
  if (gameState=="L0"){
  startPage(); 
  }
  if (gameState=="L1"){
  levelOne();
  } 
  
  if (gameState=="L2"){
  levelTwo();
  } 
  
  if (gameState=="L3"){
  levelThree();
  } 
  
    if (gameState=="L4"){
  levelFour();
    }
  
      if (gameState=="L5"){
  levelFive();
      }
  
   if (gameState=="L6"){
  levelSix();
      }
  
   if (gameState=="L7"){
  levelSeven();
      }
  
    if (gameState=="L8"){
  endPage();
  } 
  
  text(("Score: " + score), width/2, 50);

  
} //end draw

function startPage(){
  
image(startpage, 0, 0);
  textSize(50);
  text("Bee Game", width/2, height/4);
  textSize(35);
  text("Start Game", width/2, height/2);
  image(bee, mouseX-400, mouseY-400);
  
  
if (mouseIsPressed) {
 setTimeout(function(){ gameState= "L1";},250);
  
}

  
} // end start page

function levelOne(){
var ballx = 400;
var bally = 300;
  
  textSize(25);
  text("Level 1", width/2, height/7);
  text("Move Bee to Flower to Pollinate", width/2, 165);
  
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = (width);
    bally= (height);
    score= score +1;
  }

  ellipse(ballx, bally, ballSize, ballSize);  

  image(flower01, 0, 0);
  image(bee, mouseX-400, mouseY-400);
 

  if(score>0){
// lvel 2
   gameState = "L2";
  }  
} // end level one


function levelTwo(){
var ballx = 300;
var bally = 300;

  
var ballx1 = 550;
var bally1 = 500;

  
var ballx2 = 150;
var bally2 = 150;

  
  textSize(25);
  text("Level 2", width/2, height/7);
  
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    if(ballscored===0){
      ballx = (width);
     bally= (height);
     score= score +1;
      ballscored = 1;
    }
  }
  
  var distToBall1= dist(ballx1, bally1, mouseX, mouseY);
  if (distToBall1 <ballSize/2){
    if(ballscored1===0){
      ballx1 = (width);
     bally1= (height);
     score= score +1;
      ballscored1 = 1;
    }
  }
  
  var distToBall2= dist(ballx2, bally2, mouseX, mouseY);
  if (distToBall2 <ballSize/2){
   if(ballscored2===0){
      ballx2 = (width);
     bally2= (height);
     score= score +1;
      ballscored2 = 1;
    }
  }

  
  ellipse(ballx, bally, ballSize, ballSize);
  ellipse(ballx1, bally1, ballSize, ballSize);
  ellipse(ballx2, bally2, ballSize, ballSize);
  
  image(flower02, 150, 200);
  image(flower03, -250, -150);
  image(flower04, -80, 0);


  image(bee, mouseX-400, mouseY-400);
 

  if(score>3){
    ballscored=0
    ballscored1=0
    ballscored2=0
// lvel 3
   gameState = "L3";
  } 
} // end level two



function levelThree(){
var ballx = 100;
var bally = 100;

  
var ballx1 = 550;
var bally1 = 200;

  
var ballx2 = 350;
var bally2 = 550;
  
var ballx3 = 200;
var bally3 = 400;
  
var ballx4 = 550;
var bally4 = 550;

  
  textSize(25);
  text("Level 3", width/2, height/7);
  
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    if(ballscored===0){
      ballx = (width);
     bally= (height);
     score= score +1;
      ballscored = 1;
    }
  }
  
  var distToBall1= dist(ballx1, bally1, mouseX, mouseY);
  if (distToBall1 <ballSize/2){
    if(ballscored1===0){
      ballx1 = (width);
     bally1= (height);
     score= score +1;
      ballscored1 = 1;
    }
  }
  
  var distToBall2= dist(ballx2, bally2, mouseX, mouseY);
  if (distToBall2 <ballSize/2){
   if(ballscored2===0){
      ballx2 = (width);
     bally2= (height);
     score= score +1;
      ballscored2 = 1;
    }
  }
  
  var distToBall3= dist(ballx3, bally3, mouseX, mouseY);
  if (distToBall3 <ballSize/2){
   if(ballscored3===0){
      ballx3 = (width);
     bally3= (height);
     score= score +1;
      ballscored3 = 1;
    }
  }
  
  var distToBall4= dist(ballx4, bally4, mouseX, mouseY);
  if (distToBall4 <ballSize/2){
   if(ballscored4===0){
      ballx4 = (width);
     bally4= (height);
     score= score +1;
      ballscored4 = 1;
    }
  } 

  
  ellipse(ballx, bally, ballSize, ballSize);
  ellipse(ballx1, bally1, ballSize, ballSize);
  ellipse(ballx2, bally2, ballSize, ballSize);
  ellipse(ballx3, bally3, ballSize, ballSize);
  ellipse(ballx4, bally4, ballSize, ballSize);
  
  image(flower01, -285, -190);  
  image(flower02, 150, -100);
  image(flower03, 150, 250);
  image(flower04, -40, 250);
  image(flower05, -185, 100);

  image(bee, mouseX-400, mouseY-400);
 

  if(score>8){
    ballscored=0
    ballscored1=0
    ballscored2=0
    ballscored3=0
    ballscored4=0
// lvel 4
   gameState = "L4";
  } 
} // end level 3

function levelFour(){
var ballx = 200;
var bally = 100;

  
var ballx1 = 550;
var bally1 = 250;

  
var ballx2 = 150;
var bally2 = 750;
  
var ballx3 = 200;
var bally3 = 400;
  
var ballx4 = 700;
var bally4 = 700;
  
var ballx5 = 400;
var bally5 = 500;

  
  textSize(25);
  text("Level 4", width/2, height/7);
  
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    if(ballscored===0){
      ballx = (width);
     bally= (height);
     score= score +1;
      ballscored = 1;
    }
  }
  
  var distToBall1= dist(ballx1, bally1, mouseX, mouseY);
  if (distToBall1 <ballSize/2){
    if(ballscored1===0){
      ballx1 = (width);
     bally1= (height);
     score= score +1;
      ballscored1 = 1;
    }
  }
  
  var distToBall2= dist(ballx2, bally2, mouseX, mouseY);
  if (distToBall2 <ballSize/2){
   if(ballscored2===0){
      ballx2 = (width);
     bally2= (height);
     score= score +1;
      ballscored2 = 1;
    }
  }
  
  var distToBall3= dist(ballx3, bally3, mouseX, mouseY);
  if (distToBall3 <ballSize/2){
   if(ballscored3===0){
      ballx3 = (width);
     bally3= (height);
     score= score +1;
      ballscored3 = 1;
    }
  }
  
  var distToBall4= dist(ballx4, bally4, mouseX, mouseY);
  if (distToBall4 <ballSize/2){
   if(ballscored4===0){
      ballx4 = (width);
     bally4= (height);
     score= score +1;
      ballscored4 = 1;
    }
  }
  
  var distToBall5= dist(ballx5, bally5, mouseX, mouseY);
  if (distToBall5 <ballSize/2){
   if(ballscored5===0){
      ballx5 = (width);
     bally5= (height);
     score= score +1;
      ballscored5 = 1;
    }
  }

  
  ellipse(ballx, bally, ballSize, ballSize);
  ellipse(ballx1, bally1, ballSize, ballSize);
  ellipse(ballx2, bally2, ballSize, ballSize);
  ellipse(ballx3, bally3, ballSize, ballSize);
  ellipse(ballx4, bally4, ballSize, ballSize);
  ellipse(ballx5, bally5, ballSize, ballSize);
  
  image(flower01, -185, -190);  //ball0 
  image(flower01, 150, -50); //ball1 
  image(flower01, -200, 100); //ball2
  image(flower01, 0, 200); //ball3 
  image(flower01, 300, 400); //ball4 
  image(flower01, -250, 450); //ball5 
  

  image(bee, mouseX-400, mouseY-400);
 

  if(score>14){
    ballscored=0
    ballscored1=0
    ballscored2=0
    ballscored3=0
    ballscored4=0
    ballscored5=0
// lvel 5
   gameState = "L5";
  } 
} // end level 4

function levelFive(){

var ballx = 200;
var bally = 300;

  
  textSize(25);
  text("Level 5", width/2, height/7);
  text("Some Flowers are Fake", width/2, 165);
  
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    if(ballscored===0){
      ballx = (width);
     bally= (height);
     score= score +1;
      ballscored = 1;
    }
  }

  
  ellipse(ballx, bally, ballSize, ballSize);
  
  image(flower01, -200, 0);  //ball0 
  image(robot, 100, 0); //fake flower

  image(bee, mouseX-400, mouseY-400);
 

  if(score>15){
    ballscored=0

// lvel 6
   gameState = "L6";
  } 
} //end level 5

function levelSix(){

var ballx = 200;
var bally = 200;
  
var ballx1 = 400;
var bally1 = 400;
  
var ballx2 = 600;
var bally2 = 600;
  
var ballx3 = 600;
var bally3 = 200;
  
var ballx4 = 200;
var bally4 = 600;

  
  textSize(25);
  text("Level 6", width/2, height/7);
  
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    if(ballscored===0){
      ballx = (width);
     bally= (height);
     score= score +1;
      ballscored = 1;
    }
  }
  
  var distToBall1= dist(ballx1, bally1, mouseX, mouseY);
  if (distToBall1 <ballSize/2){
    if(ballscored1===0){
      ballx1 = (width);
     bally1= (height);
     score= score +1;
      ballscored1 = 1;
    }
  }
  
  var distToBall2= dist(ballx2, bally2, mouseX, mouseY);
  if (distToBall2 <ballSize/2){
   if(ballscored2===0){
      ballx2 = (width);
     bally2= (height);
     score= score +1;
      ballscored2 = 1;
    }
  }
  
  var distToBall3= dist(ballx3, bally3, mouseX, mouseY);
  if (distToBall3 <ballSize/2){
   if(ballscored3===0){
      ballx3 = (width);
     bally3= (height);
     score= score +1;
      ballscored3 = 1;
    }
  }
  
  var distToBall4= dist(ballx4, bally4, mouseX, mouseY);
  if (distToBall4 <ballSize/2){
   if(ballscored4===0){
      ballx4 = (width);
     bally4= (height);
     score= score +1;
      ballscored4 = 1;
    }
  } 

  
    image(robot, 300, 100); //fake flower
  image(robot, -300, 100); //fake flower
  image(robot, 300, -200); //fake flower
  image(robot, -300, -200); //fake flower
  image(robot, -400, 400); //fake flower
  image(robot, 400, 400); //fake flower
  image(robot, 0, 400); //fake flower
  
  
  ellipse(ballx, bally, ballSize, ballSize);
  ellipse(ballx1, bally1, ballSize, ballSize);
  ellipse(ballx2, bally2, ballSize, ballSize);
  ellipse(ballx3, bally3, ballSize, ballSize);
  ellipse(ballx4, bally4, ballSize, ballSize);
  
  
  image(flower01, -200, -100);  //ball0 
  image(flower01, 0, 100);  //ball1  
  image(flower01, 200, -100);  //ball3
  image(flower01, 200, 300);  //ball2
  image(flower01, -200, 300);  //ball4 

  image(bee, mouseX-400, mouseY-400);
 

  if(score>20){
    ballscored=0
    ballscored1=0
    ballscored2=0
    ballscored3=0
    ballscored4=0

// lvel 7
   gameState = "L7";
  } 
} //end level 6


function levelSeven(){

var ballx = 200;
var bally = 200;
  
var ballx1 = 400;
var bally1 = 300;
  
var ballx2 = 700;
var bally2 = 400;
  
var ballx3 = 600;
var bally3 = 200;
  

  
  textSize(25);
  text("Level 7", width/2, height/7);
  
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    if(ballscored===0){
      ballx = (width);
     bally= (height);
     score= score +1;
      ballscored = 1;
    }
  }
  
  var distToBall1= dist(ballx1, bally1, mouseX, mouseY);
  if (distToBall1 <ballSize/2){
    if(ballscored1===0){
      ballx1 = (width);
     bally1= (height);
     score= score +1;
      ballscored1 = 1;
    }
  }
  
  var distToBall2= dist(ballx2, bally2, mouseX, mouseY);
  if (distToBall2 <ballSize/2){
   if(ballscored2===0){
      ballx2 = (width);
     bally2= (height);
     score= score +1;
      ballscored2 = 1;
    }
  }
  
  var distToBall3= dist(ballx3, bally3, mouseX, mouseY);
  if (distToBall3 <ballSize/2){
   if(ballscored3===0){
      ballx3 = (width);
     bally3= (height);
     score= score +1;
      ballscored3 = 1;
    }
  }
   

  
    image(robot, 200, 300); //fake flower
  image(robot, -300, 100); //fake flower
  image(robot, 300, -200); //fake flower
  image(robot, -300, -200); //fake flower
  image(robot, -400, 400); //fake flower
  image(robot, 400, 400); //fake flower

  image(robot, 0, 150); //fake flower New middle
  image(robot, -200, 300); //fake flower NEW
  
  
  
  ellipse(ballx, bally, ballSize, ballSize);
  ellipse(ballx1, bally1, ballSize, ballSize);
  ellipse(ballx2, bally2, ballSize, ballSize);
  ellipse(ballx3, bally3, ballSize, ballSize);
  
        image(flower01, -200, -100);  //ball0 
  image(flower02, 0, 0);  //ball1  400 x 300
  image(flower04, 200, -100);  //ball3
  image(flower03, 300, 100);  //ball2

    image(robot, 0, 400); //fake flower
      image(robot, 200, 300); //fake flower
  
  

  image(bee, mouseX-400, mouseY-400);
 

  if(score>24){
    ballscored=0
    ballscored1=0
    ballscored2=0
    ballscored3=0

// lvel 8
   gameState = "L8";
  } 
} //end level 7


function endPage(){
  
image(endpage, 0, 0);
strokeWeight(3);
  rect(300, 10, 200, 75);
strokeWeight(3);
  rect(250, 150, 300, 75);
strokeWeight(3);
  rect(300, 350, 200, 75);
  textSize(50);
  text("Bee Game", width/2, height/4);
  textSize(35);
  text("You Won", width/2, height/2);
  image(bee, mouseX-400, mouseY-400);
  
if (mouseIsPressed) {
  score=0;
 setTimeout(function(){ gameState= "L0";},250);
  
}

} // end game
