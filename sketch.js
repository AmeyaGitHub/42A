var iss,space,spaceC1,spaceC2,spaceC3,spaceC4
var hasDocked=false


function preload(){
  iss=loadImage("Docking-undocking/iss.png")
  space=loadImage("Docking-undocking/spacebg.jpg")
  spaceC1=loadImage("Docking-undocking/spacecraft1.png")
  spaceC2=loadImage("Docking-undocking/spacecraft2.png")
  spaceC3=loadImage("Docking-undocking/spacecraft3.png")
  spaceC4=loadImage("Docking-undocking/spacecraft4.png")
}














function setup() {

  createCanvas(1000,600);
 iss1= createSprite(400, 200, 50, 50);
iss1.addImage(iss)
spaceC=createSprite(600,500,50,50)
spaceC.addImage(spaceC1)
spaceC.scale=0.3
}

function draw() {
  background(space);  
  if (!hasDocked){
    spaceC.x=spaceC.x+random (-1,1)
    if(keyDown("up")){
spaceC.y-=1
}
if(keyDown("down")){
  spaceC.y+=1
  spacec.addImage(spaceC2)
  }
  if(keyDown("left")){
    spaceC.x-=1
    spaceC.addImage(spaceC3)
    }
    if(keyDown("right")){
      spaceC.x+=1
      spaceC.addImage(spaceC4)
      }
  }
if(spaceC.y<=(iss1.y+130)&&(spaceC.x<=(iss1.x-10))){
  hasDocked=true
text("docking Successful !!",500,200)

}
  drawSprites();
}