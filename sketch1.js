let flag = 0;
let mainImg, mask1, mask2;

function preload() {
  mainImg1 = loadImage('image.png');
  mainImg2 = loadImage('image.png');
  mask1 = loadImage('mask1.png');
  mask2 = loadImage('mask2.png');
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
