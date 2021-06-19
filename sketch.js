let segLength, 
  x,
  y,
  x2,
  y2,x3,y3,x4,y4;
let oldM;
let backgroundC = getRandomColor()
let width,height

function setup() {
  width=window.innerWidth
  height= window.innerHeight
  canvas=createCanvas(width, height);
  canvas.parent("sketch")
  strokeWeight(20);
  stroke(255);
  segLength=Math.min(width/4,200);

  x = width / 2 - segLength*1.5;
  y = height / 2;
  x2 = x;
  y2 = y;
  x3= width/ 2 +segLength*1.5
  y3 =height/2;
  x4=x3
  y4=y3
  oldM=y

  background(backgroundC)
  dragSegment(0, mouseX, mouseY);
  dragSegment2(0,mouseX,mouseY);
}

// function draw() {
  
// }

function dragSegment() {

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);

  tx = mouseX - cos(angle1) * segLength;
  ty = mouseY - sin(angle1) * segLength;
  dx = tx - x2;
  dy = ty - y2;
  angle2 = atan2(dy, dx);
  x = x2 + cos(angle2) * segLength;
  y = y2 + sin(angle2) * segLength;

  segment(x, y, angle1,true);
  segment(x2, y2, angle2);
}


function dragSegment2() {
  
  dx2 = mouseX - x3;
  dy2 = mouseY - y3;
  angle3 = atan2(dy2, dx2);

  tx2 = mouseX - cos(angle3) * segLength;
  ty2 = mouseY - sin(angle3) * segLength;
  dx2 = tx2 - x4;
  dy2 = ty2 - y4;
  angle4 = atan2(dy2, dx2);
  x3 = x4 + cos(angle4) * segLength;
  y3 = y4 + sin(angle4) * segLength;

  segment(x3, y3, angle3,true);
  segment(x4, y4, angle4,false);
}

function segment(x, y, a,flag=false) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  newEndX = cos(a)*segLength
  newEndY = sin(a)*segLength
  if(flag)ellipse(segLength,0,20,20)
  pop();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function mouseMoved(){
  if(((oldM-mouseY)>30|| (oldM-mouseY)<-30) && mouseX >= width/2-50 && mouseX <= width/2+50 && mouseY >= height/2-200 && mouseY <= height/2+300){
    oldM=mouseY
    backgroundC=getRandomColor()
    document.getElementById("counter").innerHTML=int(document.getElementById("counter").innerHTML)+1
   
  }
  background(backgroundC)
  dragSegment(0, mouseX, mouseY);
  dragSegment2(0,mouseX,mouseY);
  return false
}

function touchMoved(){
  if(((oldM-mouseY)>30|| (oldM-mouseY)<-30) && mouseX >= width/2-50 && mouseX <= width/2+50 && mouseY >= height/2-200 && mouseY <= height/2+300){
    oldM=mouseY
    backgroundC=getRandomColor()
    document.getElementById("counter").innerHTML=int(document.getElementById("counter").innerHTML)+1
    
  }
  background(backgroundC)
  dragSegment(0, mouseX, mouseY);
  dragSegment2(0,mouseX,mouseY);
  return false
}





