var img;
var initials ='z'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  base = loadImage('https://zoebrazil.github.io/images/base.png');
  heart = loadImage('https://zoebrazil.github.io/images/heart.png');
  star = loadImage('https://zoebrazil.github.io/images/star.png');
  hair01 = loadImage('https://zoebrazil.github.io/images/hair01.png');
  hair02 = loadImage('https://zoebrazil.github.io/images/hair02.png');
  hair03 = loadImage('https://zoebrazil.github.io/images/hair03.png');
  hair04 = loadImage('https://zoebrazil.github.io/images/hair04.png');
  hair05 = loadImage('https://zoebrazil.github.io/images/hair05.png');
  hair06 = loadImage('https://zoebrazil.github.io/images/hair06.png');
  headscarf = loadImage('https://zoebrazil.github.io/images/headscarf.png');
  
  leftbrow01 = loadImage('https://zoebrazil.github.io/images/leftbrow01.png');
  rightbrow01 = loadImage('https://zoebrazil.github.io/images/rightbrow01.png');
  leftbrow02 = loadImage('https://zoebrazil.github.io/images/leftbrow02.png');
  rightbrow02 = loadImage('https://zoebrazil.github.io/images/rightbrow02.png');
  leftbrow03 = loadImage('https://zoebrazil.github.io/images/leftbrow03.png');
  rightbrow03 = loadImage('https://zoebrazil.github.io/images/rightbrow03.png');
  leftbrow04 = loadImage('https://zoebrazil.github.io/images/leftbrow04.png');
  rightbrow04 = loadImage('https://zoebrazil.github.io/images/rightbrow04.png');
  
  lefteye01 = loadImage('https://zoebrazil.github.io/images/lefteye01.png');
  righteye01 = loadImage('https://zoebrazil.github.io/images/righteye01.png');
  lefteye02 = loadImage('https://zoebrazil.github.io/images/lefteye02.png');
  righteye02 = loadImage('https://zoebrazil.github.io/images/righteye02.png');
  lefteye03 = loadImage('https://zoebrazil.github.io/images/lefteye03.png');
  righteye03 = loadImage('https://zoebrazil.github.io/images/righteye03.png');
  lefteye04 = loadImage('https://zoebrazil.github.io/images/lefteye04.png');
  righteye04 = loadImage('https://zoebrazil.github.io/images/righteye04.png');
  
  lips01 = loadImage('https://zoebrazil.github.io/images/lips01.png');
  lips02 = loadImage('https://zoebrazil.github.io/images/lips02.png');
  lips03 = loadImage('https://zoebrazil.github.io/images/lips03.png');
  lips04 = loadImage('https://zoebrazil.github.io/images/lips04.png');
  nose01 = loadImage('https://zoebrazil.github.io/images/nose01.png');
  nose02 = loadImage('https://zoebrazil.github.io/images/nose02.png');
  nose03 = loadImage('https://zoebrazil.github.io/images/nose03.png');
  nose04 = loadImage('https://zoebrazil.github.io/images/nose04.png');
}

function setup() {
  createCanvas(600, 600);
  background(250);
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    console.log(choice);
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(05);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // 2 places the heart image we pre-loaded
    image(heart, mouseX-25, mouseY-25, 50, 50);
    
  } else if (toolChoice == '3') { // 3 places the star image we pre-loaded
    image(star, mouseX-25, mouseY-25, 50, 50);

  } else if (toolChoice == '4') { // 4 places the base image we pre-loaded
    image(base, mouseX-250, mouseY-250, 500, 500);

  } else if (toolChoice == '5') { // 5 places the base image we pre-loaded
    image(hair01, mouseX-250, mouseY-250, 500, 500);
    
  } else if (toolChoice == '6') { // 6 places the base image we pre-loaded
    image(hair02, mouseX-250, mouseY-250, 500, 500);
    
  } else if (toolChoice == '7') { // 7 places the base image we pre-loaded
    image(hair03, mouseX-250, mouseY-250, 500, 500);

  } else if (toolChoice == '8') { // 8 places the base image we pre-loaded
    image(hair04, mouseX-250, mouseY-250, 500, 500);
    
  } else if (toolChoice == '9') { // 9 places the base image we pre-loaded
    image(hair05, mouseX-250, mouseY-250, 500, 500);
    
  } else if (toolChoice == '0') { // 0 places the base image we pre-loaded
    image(hair06, mouseX-250, mouseY-250, 500, 500);
    
  } else if (toolChoice == '-' || toolChoice == '_') { // p places the image we pre-loaded
    image(headscarf, mouseX-250, mouseY-250, 500, 500);
    
    
    
  } else if (toolChoice == 'q' || toolChoice == 'Q') { // q places the image we pre-loaded
    image(leftbrow01, mouseX-200, mouseY-160, 500, 500);
 
  } else if (toolChoice == 'w' || toolChoice == 'W') { // w places the image we pre-loaded
    image(rightbrow01, mouseX-235, mouseY-160, 500, 500);
    
  } else if (toolChoice == 'e' || toolChoice == 'E') { // e places the image we pre-loaded
    image(leftbrow02, mouseX-200, mouseY-160, 500, 500);
    
  } else if (toolChoice == 'r' || toolChoice == 'R') { // r places the image we pre-loaded
    image(rightbrow02, mouseX-240, mouseY-160, 500, 500);
 
  } else if (toolChoice == 't' || toolChoice == 'T') { // t places the image we pre-loaded
    image(leftbrow03, mouseX-185, mouseY-160, 500, 500);
    
  } else if (toolChoice == 'y' || toolChoice == 'Y') { // y places the image we pre-loaded
    image(rightbrow03, mouseX-215, mouseY-160, 500, 500);
    
  } else if (toolChoice == 'u' || toolChoice == 'U') { // u places the image we pre-loaded
    image(leftbrow04, mouseX-175, mouseY-150, 500, 500);
    
  } else if (toolChoice == 'i' || toolChoice == 'I') { // i places the image we pre-loaded
    image(rightbrow04, mouseX-220, mouseY-150, 500, 500);
    
    
    
  } else if (toolChoice == 'a' || toolChoice == 'A') { // a places the image we pre-loaded
    image(lefteye01, mouseX-200, mouseY-175, 500, 500);
 
  } else if (toolChoice == 's' || toolChoice == 'S') { // s places the image we pre-loaded
    image(righteye01, mouseX-235, mouseY-175, 500, 500);
    
  } else if (toolChoice == 'd' || toolChoice == 'D') { // d places the image we pre-loaded
    image(lefteye02, mouseX-200, mouseY-170, 500, 500);
    
  } else if (toolChoice == 'f' || toolChoice == 'F') { // f places the image we pre-loaded
    image(righteye02, mouseX-235, mouseY-170, 500, 500);
 
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(lefteye03, mouseX-190, mouseY-170, 500, 500);
    
  } else if (toolChoice == 'h' || toolChoice == 'H') { // h places the image we pre-loaded
    image(righteye03, mouseX-220, mouseY-170, 500, 500);
    
  } else if (toolChoice == 'j' || toolChoice == 'J') { // j places the image we pre-loaded
    image(lefteye04, mouseX-185, mouseY-170, 500, 500);
    
  } else if (toolChoice == 'k' || toolChoice == 'K') { // k places the image we pre-loaded
    image(righteye04, mouseX-225, mouseY-165, 500, 500);
    
    
  } else if (toolChoice == 'z' || toolChoice == 'Z') { // z places the image we pre-loaded
    image(lips01, mouseX-215, mouseY-245, 500, 500);
 
  } else if (toolChoice == 'x' || toolChoice == 'X') { // x places the image we pre-loaded
    image(lips02, mouseX-220, mouseY-240, 500, 500);
    
  } else if (toolChoice == 'c' || toolChoice == 'C') { // c places the image we pre-loaded
    image(lips03, mouseX-205, mouseY-240, 500, 500);
    
  } else if (toolChoice == 'v' || toolChoice == 'V') { // v places the image we pre-loaded
    image(lips04, mouseX-205, mouseY-245, 500, 500);
 
  } else if (toolChoice == 'b' || toolChoice == 'B') { // b places the image we pre-loaded
    image(nose01, mouseX-215, mouseY-215, 500, 500);
    
  } else if (toolChoice == 'n' || toolChoice == 'N') { // n places the image we pre-loaded
    image(nose02, mouseX-215, mouseY-205, 500, 500);
    
  } else if (toolChoice == 'm' || toolChoice == 'M') { // m places the image we pre-loaded
    image(nose03, mouseX-205, mouseY-210, 500, 500);
    
  } else if (toolChoice == ',' || toolChoice == '<') { // , places the image we pre-loaded
    image(nose04, mouseX-205, mouseY-210, 500, 500);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == '/' || key == '?') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
