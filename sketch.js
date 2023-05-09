let flag = 0;
let mainVid1, mainVid2, mask1, mask2, mask3, mask4, mask5, mask6, mask7, mask8;
let canvas1, canvas2, canvas3, canvas4, canvas5, canvas6, canvas7, canvas8;
let flag49 = 0;
let flag50 = 0;
let flag51 = 0;
let flag52 = 0;
let flag53 = 0;
let flag54 = 0;
let flag55 = 0;
let flag56 = 0;

let serial; // variable for the serial object
let inData;

function preload() {
  mask1 = loadImage("mask1.png");
  mask2 = loadImage("mask2.png");
  mask3 = loadImage("mask3.png");
  mask4 = loadImage("mask4.png");
  mask5 = loadImage("mask5.png");
  mask6 = loadImage("mask6.png");
  mask7 = loadImage("mask7.png");
  mask8 = loadImage("mask8.png");
}

function setup() {
  createCanvas(480, 640);
  // Create a video capture for mainImg1
  mainVid = createCapture(VIDEO);
  mainVid.size(width, height);
  mainVid.hide();

  canvas1 = createGraphics(width, height);
  canvas2 = createGraphics(width, height);
  canvas3 = createGraphics(width, height);
  canvas4 = createGraphics(width, height);
  canvas5 = createGraphics(width, height);
  canvas6 = createGraphics(width, height);
  canvas7 = createGraphics(width, height);
  canvas8 = createGraphics(width, height);

  // serial constructor
  serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use - you'll need to change this based on your system and port
  // on a Mac, the port will look something like this
  // serial.open("/dev/tty.usbmodem1101");
  // on Windows, the port will look something like this
  serial.open("/dev/tty.usbmodem101");
  // callback for when the sketchs connects to the server
  serial.on("connected", serverConnected);
  // callback to print the list of serial devices
  serial.on("list", gotList);
  // what to do when we get serial data
  serial.on("data", gotData);
  // what to do when there's an error
  serial.on("error", gotError);
  // when to do when the serial port opens
  serial.on("open", gotOpen);
  // what to do when the port closes
  serial.on("close", gotClose);
}

function serverConnected() {
  console.log("Connected to Server");
}

// list the ports
function gotList(thelist) {
  console.log("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    console.log(i + " " + thelist[i]);
  }
}

function gotOpen() {
  console.log("Serial Port is Open");
}

function gotClose() {
  console.log("Serial Port is Closed");
  // latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  console.log(theerror);
}

// when data is received in the serial buffer

function gotData() {
  inData = Number(serial.read());
  console.log(inData);

  // let currentString = serial.readLine(); // store the data in a variable
  // trim(currentString); // get rid of whitespace
  // if (!currentString) return; // if there's nothing in there, ignore it
  // console.log(currentString); // print it out
  // latestData = currentString; // save it to the global variable
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
  // Update flag values to inData values
  if (inData == 49) {
    if (flag49 == 0) {
      mainImg.mask(mask1);
      canvas1.image(mainImg, 0, 0, width, height);
      image(canvas1, 0, 0, width, height);
      console.log("1");
      flag49++;
    }
  } else if (inData == 50) {
    if (flag50 == 0) {
      mainImg.mask(mask2);
      canvas2.image(mainImg, 0, 0, width, height);
      image(canvas2, 0, 0, width, height);
      console.log("2");
      flag50++;
    }
  } else if (inData == 51) {
    if (flag51 == 0) {
      mainImg.mask(mask3);
      canvas3.image(mainImg, 0, 0, width, height);
      image(canvas3, 0, 0, width, height);
      console.log("3");
      flag51++;
    }
  } else if (inData == 52) {
    if (flag52 == 0) {
      mainImg.mask(mask4);
      canvas4.image(mainImg, 0, 0, width, height);
      image(canvas4, 0, 0, width, height);
      console.log("4");
      flag52++;
    }
  } else if (inData == 53) {
    if (flag53 == 0) {
      mainImg.mask(mask5);
      canvas5.image(mainImg, 0, 0, width, height);
      image(canvas5, 0, 0, width, height);
      flag53++;
    }
  } else if (inData == 54) {
    if (flag54 == 0) {
      mainImg.mask(mask6);
      canvas6.image(mainImg, 0, 0, width, height);
      image(canvas6, 0, 0, width, height);
      flag54++;
    }
  } else if (inData == 55) {
    if (flag55 == 0) {
      mainImg.mask(mask7);
      canvas7.image(mainImg, 0, 0, width, height);
      image(canvas7, 0, 0, width, height);
      flag55++;
    }
  } else if (inData == 56) {
    if (flag56 == 0) {
      mainImg.mask(mask8);
      canvas8.image(mainImg, 0, 0, width, height);
      image(canvas8, 0, 0, width, height);
      flag56++;
    }
  }
  // Increase flag value
  flag = flag + 1;
}
