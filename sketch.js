var snowball,snowballImg;
var snowImg,snow;

function preload(){
  snowballImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,600);
  snowball = createSprite(400, 300);
  snowball.addImage(snowballImg);

  snow = createSprite(400,200);
  snow.addImage(snowImg);
  snow.x = Math.random(0,1000);
  snow.y = Math.random(-100,0);
  snow.velocityY = 10;
  snow.scale = 0.20;

}

function draw() {
  background(255,255,255); 

  if(snow.y >= 400){
    snow.x = Math.round(random(0,700));
    snow.y = Math.round(random(-100,0));
  }
  

  drawSprites();
}