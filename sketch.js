function setup() {
  createCanvas (400, 400);
  background(230,230,250);
}

function draw() {
  
  //arc(200,149, 200, 240,PI, TAU, OPEN); //hair top
  //curve(200,269, 200,289)
  //ellipse(200,150,180,220); //face 
  
  stroke(35, 40, 30);
  fill(35, 40, 30);
  strokeWeight(3);
  ellipse(240, 227, 60, 75); //right
  ellipse(160, 225, 60, 80); //


  
  //face
  
  fill(255,220,178);
  stroke(255,220,178);
  arc(200,150,180,220,PI, TAU); //face  
  quad(110,150,290,150,230,240,170,240)//face wtf how did this happen
 
  stroke(230,190,138);
  strokeWeight(2);
  line(200, 160, 200, 185);

  
  //hair
  //fill(90, 68,69);
  //stroke(90, 68,69);
  stroke(59, 48, 36);
  fill(59, 48, 36);
  strokeWeight(3);
  strokeWeight(3);
  
  quad(170,60,230,30,302,128,240,110);
  quad(150, 40,178, 60, 130, 100, 100, 110);
  ellipse(115, 160, 45,120); //left
  ellipse(125, 225, 60, 80); //
  //ellipse(258, 80, 62, 62)
  arc(245,90,60, 90, PI, QUARTER_PI, OPEN);
  //arc(190, 55, 40, 40, PI, QUARTER_PI, OPEN);
  ellipse(190, 45, 60, 30);
  ellipse(282, 160, 45, 80); //right
  ellipse(275, 227, 60, 75); //right 


  //eyes
  
  strokeWeight(3);
  fill (255,220,178);
  arc(155,140,30,40, PI, PI+HALF_PI, OPEN);//left eyebrow
  arc(245,140,30,40, PI+HALF_PI,TAU, OPEN);//right eyebrow
  
  strokeWeight(1);
  fill(250,250,250);
  stroke(250,250,250);
  arc(165, 150, 35, 35, PI, TAU, CHORD);
  arc(235, 150, 35, 35, PI, TAU, CHORD);
  //ellipse(165,145,40,35); //left eye
  //ellipse(235,145,40,35); //right eye
  strokeWeight(0);
  rect(147, 150, 36, 5);
  rect(217, 150, 36, 5);

  
  stroke ( 0, 0, 0);
  fill(0, 0, 0);
  
  //stroke(250,250,250);
  //strokeWeight(4);
  //line(150,150, 180, 150);
  //line(220, 150, 250, 150);
  //stroke( 0, 0, 0);
  strokeWeight(1);
  ellipse(165, 145, 18);
  ellipse(235, 145, 18);
  
  
  fill(250, 250, 250);
  stroke(250, 250, 250);
  //ellipse(238, 140, 10);
  
  //mouth
  
  stroke (230,190,138)
  //strokeWeight(1.5);
  //line (190, 210, 212, 210);
  fill(255,220,178);
  stroke(240,128,128);
  strokeWeight(2);
  arc(200,215,30,10, TAU, PI, OPEN);//mouth
 
 //neck
 fill(230,190,138);
 stroke(230,190,138);
 quad(228, 242, 172, 242, 170, 270, 230, 270);
 fill(255,220,178);
 stroke(255,220,178);
 quad(170, 270, 230, 270, 230, 375,170, 375);
 
 //shirt
 //quad( 130, 275, 270, 275, 360, 600, 80, 600);
 //quad(130, 275, 170, 270, 170, 600, 80, 600); 
  fill(250, 250, 250);
  stroke(250, 250, 250);
  quad(130, 275, 170, 270, 230, 376, 80, 376); //left
  quad(230, 270, 275, 275, 305, 376, 180, 376); //right
  quad(95, 320, 130, 276, 130, 376, 80, 376); //left
  quad(275, 276, 315, 315, 330, 376, 275, 376); //right
  
  stroke(255,215,0);
  fill(230,190,138);
  strokeWeight(2); 
  arc(200, 269, 60, 10, TAU, PI, OPEN); //necklace
  
  strokeWeight(1);
  stroke(255,215,0);
  fill(255,215,0);
  ellipse(185, 274, 6); //necklace
  
  fill(235,248,255);
  stroke(235,248,255);
  quad(160, 268, 170, 262, 200, 325, 185,320); //left collar 
  quad(230, 262, 240, 268, 216, 320, 201,325); //right collar 
  rect(195,325, 10, 50); //button




  print(mouseX);
  print(mouseY);
  //arc(160,120,40, 20, PI,TAU, OPEN); test eyebrow
  //curve(100,149, 100, 149,60,200,60,200,90,250,90,250);
  
  

  
}