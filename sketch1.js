let flag = 0;
let mainImg, mask1, mask2;

function preload() {
  mask1 = loadImage('mask1.png');
  mask2 = loadImage('mask2.png');
  mask3 = loadImage("mask3.png");
  mask4 = loadImage("mask4.png");
  mask5 = loadImage("mask5.png");
  mask6 = loadImage("mask6.png");
  mask7 = loadImage("mask7.png");
  mask8 = loadImage("mask8.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(200,200,200);

  if (flag < 200) {
    // Use mask1
    mainImg1.mask(mask1);
    image(mainImg1, 0, 0, width, height);
  } else {
    // Use mask2
    mainImg2.mask(mask2);
    image(mainImg2, 0, 0, width, height);
  }

  // Display the masked mainImg
  // image(mainImg1, 0, 0, width, height);
  // image(mainImg2, 0, 0, width, height);
  

  // Increase flag value
  flag = flag + 1;
}
