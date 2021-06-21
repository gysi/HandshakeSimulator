let segLength;
let pi = Math.PI;
let pi2 = pi*2.;
let pid2 = pi/2.;
let pid3 = pi/3.;
let pid4 = pi/4.;
let segment = {
  first: { x:0, y:0, x2:0, y2:0, angle1:0, angle2:0 },
  second: { x:0, y:0, x2:0, y2:0, angle1:0, angle2:0 }
}
let s1 = segment.first;
let s2 = segment.second;
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

  s1.x = width / 2 - segLength * 1.5 ;
  s1.y = height / 2;
  s1.x2 = s1.x;
  s1.y2 = s1.y;
  s2.x = width / 2 + segLength * 1.5;
  s2.y = height / 2;
  s2.x2 = s2.x;
  s2.y2= s2.y;
  oldM=s1.y;

  background(backgroundC);
  drawSegment(s1);
  drawSegment(s2);
}

function drawSegment(s) {
  dx = mouseX - s.x;
  dy = mouseY - s.y;
  s.angle1 = atan2(dy, dx);

  tx = mouseX - cos(s.angle1) * segLength;
  ty = mouseY - sin(s.angle1) * segLength;
  dx = tx - s.x2;
  dy = ty - s.y2;
  s.angle2 = atan2(dy, dx);
  s.x = s.x2 + cos(s.angle2) * segLength;
  s.y = s.y2 + sin(s.angle2) * segLength;

  drawLine(s.x, s.y, s.angle1,true);
  drawLine(s.x2, s.y2, s.angle2);
}

function drawLine(x, y, a,flag=false) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
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
  mouseTouchMoved();
}

function touchMoved(){
  mouseTouchMoved();
}

function isAngleConditionMet(){
  let innerAngleS1 = ((s1.angle2-s1.angle1)+pi2)%pi2
  let innerAngleS2 = pi2-(((s2.angle2-s2.angle1)+pi2)%pi2);
  // console.log(innerAngleS2);
  return ((innerAngleS1 >= 0-0.1 && innerAngleS1 <= pi) || innerAngleS1 > pi2 - 0.05)
    && ((innerAngleS2 >= 0-0.1 && innerAngleS2 <= pi) || innerAngleS2 > pi2 - 0.05)
    && sin(s1.angle2) + cos(s2.angle2) > -0.1 && sin(s1.angle2) + cos(s2.angle2) < 0.41;
}

function mouseTouchMoved(){
  if(((oldM-mouseY)>50|| (oldM-mouseY)<-50) && mouseX >= width/2-80 && mouseX <= width/2+80 && mouseY >= height/2-200 && mouseY <= height/2+300
    && isAngleConditionMet()
  ){
    oldM=mouseY
    backgroundC=getRandomColor()
    document.getElementById("counter").innerHTML=int(document.getElementById("counter").innerHTML)+1
  }
  if(int(document.getElementById("counter").innerHTML)==1000){
    backgroundC="#fce800"
  }
  background(backgroundC)
  drawSegment(s1);
  drawSegment(s2);
}





