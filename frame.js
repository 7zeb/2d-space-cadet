//THIS IS A P5.JS FILE!!!
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
}
