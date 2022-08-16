var numLocations = 6; // set your total number of locations here
var curLocation = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  if (geoCheck() == true) {
    // geolocation is available
    print("connected!");
    // addFence(0, 0); // anywhere else
    
    // replace with your locations here
    addFence(-35.02632615, 117.87484878); // meeting room
    addFence(-35.026785, 117.875163); // carpark
    addFence(-35.026448, 117.874960); // hallway
    addFence(-35.02632440, 117.87484857); // other side of meeting room
    addFence(-35.026081, -117.876493); // vancouver street cafe
    addFence(-35.026872, -117.876892); // woolen mills
    intervalCurrentPosition(positionUpdated, 1000);
  }
}

function draw() {
  background(127);
  textSize(30);
  if (curLocation == 1) {
    // draw view for location 1
    background(255, 0, 0);
    text("meeting room", 50, 50);
  } else if (curLocation == 2) {
    // draw view for location 2
    background(255, 255, 0);
    text("carpark", 50, 50);
  } else if (curLocation == 3) {
    // draw view for location 3
    background(255, 0, 255);
    text("hallway", 50, 50);
  } else if (curLocation == 4) {
    background(10, 230, 100);
    text("other side of meeting room", 50, 50);
  } else if (curLocation == 5) {
    background(100, 250, 200);
    text("vancouver street cafe", 50, 50);
  } else if (curLocation == 6) {
    background(200, 250, 200);
    text("woolen mills", 50, 50);
  }

  // add this in at the bottom
  checkLocations();
  drawButtons();
}

// add these methods
// put any extra stuff in mousePressed into change location
function mousePressed() {
  // this detects a click on the testing buttons
  detectButtonPress();
  changeLocation();
}

function changeLocation() {
  // do any cleanup here like stopping sounds or reseting variables
}