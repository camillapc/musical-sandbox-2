var bg;
var x = 0;
var currentBg = null;
var shape1 = null;
var shape2 = null;
var shape3 = null;
var shape4 = null;

var shape1Sound;

function preload() {
  shape1Sound = loadSound("a.mp3");
  shape2Sound = loadSound("g.mp3");
  shape3Sound = loadSound("c.mp3");
  shape4Sound = loadSound("f.mp3");
}

function setup() {
  createCanvas(1200, 800);
  bg = loadImage("bg1.jpg");
  pixelDensity();
  background("#3e443a");

  shape1 = createImg('shape1.png');
  shape1.size(100, 100);
  shape1.position(200, 0);
  shape1.mousePressed(shape1Pressed);

    shape1Sound.loop();
  shape1Sound.pause();

  shape2 = createImg('shape2.png');
  shape2.size(100, 100);
  shape2.position(300, 0);
  shape2.mousePressed(shape2Pressed);

  //now the variable shape3 is a shortcut to the img
  //with id shape3 on the html file
  shape3 = document.getElementById("shape3");
  shape3.style.width = "100px";
  shape3.style.height = "100px";
  shape3.style.position = "absolute";
  shape3.style.top = "0px";
  shape3.style.left = "0px";

  shape3Sound.loop();
  shape3Sound.pause();

    //now the variable shape4 is a shortcut to the img
  //with id shape4 on the html file

  shape4 = document.getElementById("shape4");
  shape4.style.width = "25px";
  shape4.style.height = "200px";
  shape4.style.position = "absolute";
  shape4.style.top = "0px";
  shape4.style.left = "0px";
}

function draw() {
  bg.loadPixels();
  // image(video, 0, 0);
  var w = bg.width;
  var h = bg.height;

  copy(bg, w/2, 0, 1, h, x, 0, 1, h);

  x = x + 2;

  if (x > width) {
    x = 0;

      //image(vid, 0, 0);
  }


  image(shape1, 0, 0, 100, 100);
}



function shape1Pressed() {
  print(shape1.position().x)
  if (shape1Sound.isPlaying()) {
    shape1Sound.stop();
  } else {
    shape1Sound.play();
  }
}

function shape2Pressed() {
  print("hey");
  if (shape2Sound.isPlaying()) {
    shape2Sound.stop();
  } else {
    shape2Sound.play();
  }
}

function shape3Clicked() {
  print("hey");
  if (shape3Sound.isPlaying()) {
    shape3Sound.stop();
  } else {
    shape3Sound.play();
  }
}


function shape4Clicked() {
  print("hey");
  if (shape4Sound.isPlaying()) {
    shape4Sound.stop();
  } else {
    shape4Sound.play();
  }
}

function touchStarted() {
  print("start");
}

function touchEnded() {
  print("ended");
}
