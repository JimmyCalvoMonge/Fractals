//p5.js sketch to draw Cantor function

var cantor =[];

function setup(){
  createCanvas(850,600)
  var a = createVector(0,height);
  var b = createVector(width,0);
  cantor[0]= new Cantor(a,b);
}

function mouseClicked(){
  for(var i=cantor.length-1;i>=0;i--){
    if(!cantor[i].finished){
      cantor.push(cantor[i].rightcantor());
      cantor.push(cantor[i].leftcantor());
    }
    cantor[i].finished=true;
  }
}

function draw(){
  background(30);
  
  noFill();
  textSize(18);
  text('La Función de Cantor. Es creciente y su derivada es cero casi en todo lado.', 100, 50);
  
  for(var i =0;i< cantor.length;i++){
    cantor[i].show2();
  }
  
  for(var j =int(cantor.length/2);j< cantor.length;j++){
    cantor[j].show();
  }
}
