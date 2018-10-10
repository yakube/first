var doit;
function setup() {
  createCanvas(windowWidth, windowHeight);
  doit=false;
}

function draw() {
  if(doit)
    background(random(255),random(255),random(255));
  else
    background(0);
  fill(255,0,0);
  rect(50,50,50,50);
  textSize(30);
  text("Haha",50,50);
}
function mousePressed()
{
  doit=true;
}
function mouseReleased()
{
  doit=false;
}
function windowResized()
{
  createCanvas(windowWidth, windowHeight);
}
