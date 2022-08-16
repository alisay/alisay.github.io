var x = 200;
var y = 500;
var growth = 0;
var health = false;
var leaves = 0;
var wilts = 0;
var leaf = {width: 100, height: 50, start:370, fin:135, r:127, g:222, b:87};
var wiltyLeaf = {width:100, height: 50, start: 370, fin:135, r:92, g:72, b:44, x:0, y:0}
var d = 0;

function setup() {
createCanvas(400,600);
background(203, 245, 239);
noStroke();
fill(36, 17, 3)
quad(100,height,80,height-100,width-80,height-100,300,height);

} //endSetup
function draw() {
    fill(127, 222, 87);
    ellipse(x,y,10,10);

    y = y - 0.1;
    x = x + random(-2, 2);
    growth = random(0, 1001);
    health = !health

    if (growth>999 && health == true) {
        fill(leaf.r, leaf.g, leaf.b);
        arc(x+50,y,leaf.width,leaf.height,leaf.start,leaf.fin);  
        print(health);
        leaves = leaves + 1;
        print("healthy leaves = " +leaves)
        //print("leaf grown at y= " +y +"leaf grown at x= " +x)
        noLoop();

    } else if (growth>999 && health == false) {
        fill(wiltyLeaf.r, wiltyLeaf.g, wiltyLeaf.b);
        arc(x+50,y,leaf.width,leaf.height,leaf.start,leaf.fin);  
        print(health);
        wilts = wilts + 1;
        wiltyLeaf.x = x;
        wiltyLeaf.y = y;
        print("wilted leaves = " +wilts)
        //print("leaf grown at y= " +wiltyLeaf.y +"leaf grown at x= " +wiltyLeaf.x)
        noLoop();
    }
} //end draw function
function mousePressed() {
    d = dist(wiltyLeaf.x, wiltyLeaf.y, mouseX, mouseY)
if (d<80) {
    wilts = wilts -1;
    fill(leaf.r, leaf.g, leaf.b);
    arc(x+50,y,leaf.width,leaf.height,leaf.start,leaf.fin);  
    print("wilted leaves = " +wilts)
}
    loop(); 
} //end mousePressed