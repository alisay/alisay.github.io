// this class describes the structure
// and movements of the brick

//  Create 3 bricks/cars try and move a figure up to top of canvas 
//  without getting hit, like crossy road
// 


let button;


class Brick{
  constructor(bc, y){
    this.brickColor = bc;
    this.yPos = y;
    this.xPos = 0;
  }

  // this function creates the brick
  createBrick(){
    fill(this.brickColor);
    rect(this.xPos, this.yPos, 100, 50);
  }

  // this function sets the speed
  // of movement of the brick to 1
  setSpeed(){
    this.xSpeed = 1;
  }
  setSpeedToVal(newSpeed){
    this.xSpeed = newSpeed;
  }

  // this function sets the bricks in motion
  moveBrick(){
    this.xPos+=this.xSpeed;
    if(this.xPos+100 >= width || this.xPos <= 0){
      this.xSpeed*=-1;
    }
  }
  moveBrickMore(offset){
    this.xPos+=this.xSpeed  + offset;
    if(this.xPos+100 >= width || this.xPos <= 0){
      this.xSpeed*=-1;
    }
  }
}
class FastBrick extends Brick{
  
  constructor(bc,x, y) {
    super(bc, y);
    this.xPos = x;
  }
}

//  Create a class to represent player they can only move one square at a time

class Player{
  constructor(col,_size){
    this.playerCol = col;
    this.size = _size;
    this.yPos = _size/2;
    this.xPos = _size/2;
  }

  createPlayer(){
    fill(this.playerCol);
    ellipse(this.xPos,this.yPos,50,50);
    print("In createPlayer");
  }
  
  changePlayerPos(_xPos,_yPos) {
    this.yPos = _yPos;
    this.xPos = _xPos;
  }
}



function setup() {
  createCanvas(720, 400);
  button = createButton('click me');
  button.position(0, 150);
  createP("Keep the mouse clicked").style('color','#ffffff');
  createP("to check whether the bricks").style('color','#ffffff');
  createP("are moving at same speed or not").style('color','#ffffff');
}

// creating two bricks of 
// colors white and black
let brick1 = new Brick("white",100);
let brick2 = new FastBrick("green",100,250);
let brick3 = new FastBrick("red",150,350);
let playerOne = new Player("red", 50);

// This function sets speed of
// brick 1 and brick2 to 1.
brick1.setSpeedToVal(5);
brick2.setSpeedToVal(5);
brick3.setSpeedToVal(5);

function draw () {

  //button.mousePressed(callback);
  //if(mouseIsPressed){
    background(50);
    playerOne.createPlayer();
  //}
  brick1.createBrick();
  brick1.moveBrick();
  if(!mouseIsPressed){
    //createBars();
    //  nothing here yet!
  }
  brick2.createBrick();
  brick2.moveBrick();

  brick3.createBrick();
  //brick3.moveBrickMore(10);
  brick3.moveBrick();
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      playerOne.xPos = playerOne.xPos - playerOne.size; 
      //playerOne.changePlayerPos();
    }
    if (mouseButton === RIGHT) {
      playerOne.xPos = playerOne.xPos + playerOne.size; 
    }
    if (mouseButton === CENTER) {
      if(mouseY > playerOne.yPos){
        playerOne.yPos = playerOne.yPos + playerOne.size; 
      } else{
        playerOne.yPos = playerOne.yPos - playerOne.size; 
      }
    }
  }
}

// this function creates the black and
// white bars across the screen
function createBars() {
  let len = 12;
  for(let i = 0;i<width/len;i++){
    fill("white");
    if(i%2 === 0)
    rect(i*len,height,len,-height);
  }
}