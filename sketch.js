let flag = 0;
let mainVid1, mainVid2, mask1, mask2, mask3, mask4;
let canvas1, canvas2, canvas3, canvas4;

function preload() {
  mainImg1 = loadImage("image.png");
  mainImg2 = loadImage("image.png");
  mask1 = loadImage("mask1.png");
  mask2 = loadImage("mask2.png");
  mask3 = loadImage("mask3.png");
  mask4 = loadImage("mask4.png");
}

function setup() {
  createCanvas(400, 400);
  // Create a video capture for mainImg1
  mainVid = createCapture(VIDEO);
  mainVid.size(width, height);
  mainVid.hide();
  
  canvas1 = createGraphics(width, height);
  canvas2 = createGraphics(width, height);
  canvas3 = createGraphics(width, height);
  canvas4 = createGraphics(width, height);
}

function draw() {
  // Capture the video into an image
  let mainImg;
  // if (flag < 200) {
  mainImg = mainVid.get();
  // } else {
  // mainImg = mainVid2.get();
  // }

  // Apply the mask to the image
  if (flag == 200) {
    mainImg.mask(mask1);
    canvas1.image(mainImg, 0, 0, width, height);
    image(canvas1, 0, 0, width, height);
    console.log("1");
  } else if (flag == 400) {
    mainImg.mask(mask2);
    canvas2.image(mainImg, 0, 0, width, height);
    image(canvas2, 0, 0, width, height);
    console.log("2");
  } else if (flag == 600) {
    mainImg.mask(mask3);
    canvas3.image(mainImg, 0, 0, width, height);
    image(canvas3, 0, 0, width, height);
    console.log("3");
  } else if (flag == 800) {
    mainImg.mask(mask4);
    canvas4.image(mainImg, 0, 0, width, height);
    image(canvas4, 0, 0, width, height);
    console.log("4");
  }

  // Increase flag value
  flag = flag + 1;
}
