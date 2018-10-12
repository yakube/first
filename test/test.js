var doit;
var jake;
var nums,digitOught;
function preload()
{
  jake=loadImage("data/jake.jpg");
}
function setup() {
  setupStuff();
}
function setupStuff()
{
  createCanvas(windowWidth, windowHeight);
  doit=false;
  imageMode(CENTER,CENTER);
  textAlign(CENTER,CENTER);
  nums=[];
  digitOught=75;
  for(var i=0; i<digitOught; i++)
  {
    nums.push(new Number());
  }
}
function draw() {
  if(doit)
  {
    background(random(255),random(255),random(255));
    tint(random(255),random(255),random(255));
  }
  else
  {
    background(0);
    tint(255,255,255);
  }
  for(var i=nums.length-1; i>=0; i--)
  {
    nums[i].fall();
  }
  fill(255);
  textSize((width)/25);
  image(jake,width/2,height/2,width/2,width/2);
  stroke(0);
  strokeWeight(width/100);
  textAlign(CENTER,BOTTOM);
  text("Congratulations, you fool",width/2,(height/2)-width/4);
  textAlign(CENTER,TOP);
  text("You just got hacked",width/2,(height/2)+width/4);
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
  setupStuff();
}
