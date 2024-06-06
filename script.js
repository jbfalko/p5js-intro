var figurX = 200;
var figurY = 200;
var figurStr = 20;

function setup() {
  frameRate(60);
  createCanvas(windowWidth, 300);
  background(100);
}

function draw() {
  if (figurX < mouseX) { figurX = figurX + 1; }
  if (mouseX < figurX) { figurX = figurX - 1; }

  fill(255);

  if (figurX <= mouseX && mouseX < figurX + figurStr) {
    fill(0);
  }

  ellipse(figurX, figurY, figurStr, figurStr);
}