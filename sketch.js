function setup() {
  createCanvas(700, 480);

  background(66, 242, 245);

  strokeWeight(150);
  stroke("blue");
  //frameRate(10);
}

function draw() {
  let posY = mouseY;
  let posX = mouseX;
  point(posX, posY);
    
  jump();
}

function jump() {
  console.log('Jumpy!!!!');
}
