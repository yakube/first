function Number()
{
  this.x=random(width);
  this.y=random(height+200)-100;
  if(random()>.5)
    this.val=1;
  else
    this.val=0;
  this.speed=random(height/500)+height/100
  this.fall=function()
  {
    textAlign(CENTER,CENTER);
    fill(0,255,0);
    textSize(width/30)
    text(this.val,this.x,this.y);
    this.y+=this.speed;
  }
}
