var circle = {
  x : 0,
  y : 200.0,
  diameter : 40,
};

var b = 242;
var speed = 6;

number = 0

function setup() {
  createCanvas (1200, 400);
}

function draw() {
  background(25, 25, b);
  
  stroke(248, 240, 251);
  strokeWeight(4);
  ellipse(circle.x, circle.y, 40);
  
 
  
  //line(width/2,0,width/2,height);
  
  stroke(248, 240, 251);
  strokeWeight(1);
  line (220, 40, 220, 60);
  line (210, 50, 230, 50);
  
  line (420, 340, 420, 360);
  line (410, 350, 430, 350);
  
  line (580, 110, 580, 130);
  line (570, 120, 590, 120);
  
  line (880, 370, 880, 390);
  line (870, 380, 890, 380);
  
  fill(135,206,235);
  stroke(135,206,235);
  
  rect(900, 100, 2, 2);
  rect(1100, 350, 2,2);
  rect(650, 250, 2,2);
  rect(150, 370, 2,3);
  
  if (circle.x > width/2) { 
    b = map(circle.x, width/2, width, 0, 75);
  }
  
  if (circle.x < width/2){
    b = map(circle.x, 0, width/2, 75, 0);
  }
  
  if (circle.x > width) {
    speed = -speed;
  }
  
  if (circle.x < 0 ) {
    speed = -speed;
  }
  
  circle.x = circle.x + speed;

noStroke
textSize(40);
fill(248, 240, 251);
text(number,1150, 50); 

}



function mousePressed (){
  speed = -speed;
  number = number + 1;
}
