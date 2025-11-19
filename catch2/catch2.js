var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img, img2, img3, img4;

function preload() {
  img = loadImage('https://terryonterrel.github.io/images/Unknown.jpeg');
    img2 = loadImage('https://terryonterrel.github.io/images/images.jpeg');
      img3 = loadImage('https://terryonterrel.github.io/images/images-1.jpeg');
        img4 = loadImage('https://terryonterrel.github.io/images/images-2.jpeg');
        
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  imageMode(CENTER); // <-- treat (ballx,bally) as the image center
}

function draw() {
  background(100, 200, 100);

  if (gameState == "L1") levelOne();
  if (gameState == "L2") levelTwo();
  if (gameState == "L3") levelThree();

  text("Score: " + score, width/2, 40);
}

function moveBallRandomly() {
  // keep the image fully on canvas
  ballx = random(ballSize/2, width - ballSize/2);
  bally = random(ballSize/2, height - ballSize/2);
}

function levelOne() {
  text("Level 1", width/2, height - 20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    moveBallRandomly();
    score = score + 1;
  }

  if (score > 5) {
    gameState = "L2";
  }

  image(img, ballx, bally, ballSize, ballSize);
  // If you want a helper line, draw it with 4 args:
  // line(mouseX, mouseY, ballx, bally);
}

function levelTwo() {
  background(200, 100, 0);
  text("Level 2", width/2, height - 20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    moveBallRandomly();
    score = score + 1;
  }

  if (score > 10) {
    gameState = "L3";
  }

  image(img, ballx, bally, ballSize, ballSize);
}

function levelThree() {
  background(200, 100, 200); // keep values 0–255
  text("Level 3", width/2, height - 20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    moveBallRandomly();
    ballSize = max(5, ballSize - 1); // prevent negative/zero size
    score = score + 1;
  }

  image(img, ballx, bally, ballSize, ballSize);
}
