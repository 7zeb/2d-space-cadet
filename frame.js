//This is a p5.js file
//2D Space Cadet Pinball Source-Code (https://github.com/7zeb/2d-space-cadet)

//Global Variables
let leftFlipperAngle = 30;    //tilted down
let rightFlipperAngle = 30;  //tilted down


function setup() {
  createCanvas(600, 800);
  ball = createVector(width / 2, height / 2);
  velocity = createVector(2, -3);
} 

function draw() {
    background(20);
    fill(156, 151, 140); //set ball colour to a gray-ish
    ellipse(ball.x, ball.y, 20); //draws the ball
    //ball.x and ball.y are both variables
    
    //update the balls position
    ball.add(velocity);

    //Bounce off walls
     if (ball.x <= 0 || ball.x >= width) velocity.x *= -1;
     if (ball.y <= 0 || ball.y >= height) velocity.y *= -1;
     
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
     if (ball.y > 730) {
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
