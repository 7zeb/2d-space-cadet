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

    // Bounce off walls
     if (ball.x <= 0 || ball.x >= width) velocity.x *= -1;
     if (ball.y <= 0 || ball.y >= height) velocity.y *= -1;
     
     //left flipper
     push(); //so it won't effect us later
     translate(150,750); //this will be the inital position of the flipper
     rotate(radians(-30)); //rotate counter-clockwise 30 degrees
     fill(200, 80, 80);
     rect(0,-10,80,20,10); //actually drawing the flipper
     pop(); //will restore everything back (in junction with push)
     
}
