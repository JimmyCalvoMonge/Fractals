//Sketch to draw non monotonic function
//The same idea as for Cantor.
//It goes the same way with every fractal.

var mono =[];

function setup(){
  createCanvas(850,600)
  var a = createVector(0,height);
  var b = createVector(width,0);
  mono[0]= new Mono(a,b);
}

function mouseClicked(){
  for(var i=mono.length-1;i>=0;i--){
    if(!mono[i].finished){
      mono.push(mono[i].leftmono());
      mono.push(mono[i].centermono());
      mono.push(mono[i].rightmono());
    }
    mono[i].finished=true;
  }
}

function draw(){
  background(30);
  noFill();
  textSize(18);
  text('Una función que NUNCA es monótona (ni creciente ni decreciente)', 160, 50);
  for(var i=int(mono.length/3);i<mono.length;i++){
    mono[i].show();
  }
}
