
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(mouseIsPressed)
    background(random(255));
  //background(0);
  color(255);
  rect(50,50,50,50);
}
function mousePressed()
{
  //background(random(255));
}
function windowResized()
{
  createCanvas(windowWidth, windowHeight);
}
