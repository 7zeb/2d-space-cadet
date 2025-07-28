//This is a p5.js file
//2D Space Cadet Pinball Source-Code (https://github.com/7zeb/2d-space-cadet)

//Global Variables
let leftFlipperAngle = 30;    //tilted down
let rightFlipperAngle = 30;  //tilted down
let ballX;
let ballY;
let ballRadius = 20;
let ballLaunched = false; //tells the game that the ball is not launched from the start of the game.


function setup() {
  createCanvas(600, 800);
  ballX = width / 2;
  ballY = height - 50;
  ball = createVector(width / 2, height / 2);
  let velocity = createVector(0, 0); //keeps the ball parked until the spacebar is pressed
} 

function draw() {
    background(8, 67, 138); //blue colour for background
    fill(156, 151, 140); //set ball colour to a gray-ish
    ellipse(ball.x, ball.y, 20); //draws the ball
    //ball.x and ball.y are both variables
    
    //The IF statement makes it so that the ball will only move if ballLaunched is set to true
    if (ballLaunched) {
    ball.add(velocity);
  }

    //Bounce off walls
     if (ball.x <= ballRadius) {
  ball.x = ballRadius;        //Clamp position
  velocity.x = abs(velocity.x); //Always push right
}
if (ball.x >= width - ballRadius) {
  ball.x = width - ballRadius;
  velocity.x = -abs(velocity.x); //Always push left
}

if (ball.y <= ballRadius) {
  ball.y = ballRadius;
  velocity.y = abs(velocity.y); //Always bounce downward
  
}

     
     //left flipper
     push(); //so it won't effect us later
     translate(150,750); //this will be the inital position of the flipper
     rotate(radians(leftFlipperAngle)); //uses the leftFlipperAngle global variable for the rotation.
     fill(200, 120, 50); //orange colour
     rect(0,-10,80,20,10); //actually drawing the flipper
     pop(); //will restore everything back (in junction with push)
     
     //right flipper
     push(); //refer to the last message on push
     translate(width -150,750); //mirror the position of the left flipper
     scale(-1,1); //fixes a bug in the flipper not being mirrored to the left one
     rotate(radians(rightFlipperAngle)); //same effect as left flipper for more detail
     fill(200, 120, 50); //orange colour
     rect(0, -10, 80,20,10); //right flipper position
     pop(); //refer to previous message on pop
     
     
     //key movements
     //explanation: this is where all the key movements will be placed in the code
     if (keyIsDown(90)) { //90 is the code for the Z Key
       leftFlipperAngle = 0;
     } else {
         leftFlipperAngle = 30; //this is the defualt value for leftFlipperAngle
     }
     
     if (keyIsDown(191)) { //191 is the code for the / key
         rightFlipperAngle = 0; //makes it swing up
     } else {
         rightFlipperAngle = 30; //this is the defualt value for rightFlipperAngle
     }
     
     //ball collison
     if (ballLaunched && ball.y > 730) {
  //Left flipper zone
  if (ball.x > 150 && ball.x < 230 && leftFlipperAngle === 0) {
    velocity.y = -abs(velocity.y);
    velocity.x += 2; //give it a kick
  }
  //Right flipper zone
  if (ball.x > width - 230 && ball.x < width - 150 && rightFlipperAngle === 0) {
    velocity.y = -abs(velocity.y);
    velocity.x -= 2;
  }
}
}

function keyPressed() {
    //this function will handle the spacebar (launch ball)
    if (key == ' ' && !ballLaunched) {
        ballLaunched = true;
        velocity = createVector(2, -4); //will make the ball move
    }
}
