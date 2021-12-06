//Class for Koch-Barcello curves. (Modified as well, with inclination angle).
//See : https://www.researchgate.net/publication/322799091_Variants_of_Koch_curve_A_Review/link/5a709e7ca6fdcc33daa9da32/download


function Koch(begin, end, direction) {
  this.direction=direction
  this.begin = begin;
  this.end = end;
  
  this.mid1 = createVector(this.begin.x + (this.end.x - this.begin.x) * (1 / 4), 
                          this.begin.y + (this.end.y - this.begin.y) * (1 / 4));
  
  
  var dir = p5.Vector.sub(this.begin,this.mid1);
  dir.rotate(direction);
  //dir.rotate(-2*direction*random(0,1));
  this.mid2 = p5.Vector.add(this.mid1,dir);
  
  this.mid4 = createVector(this.begin.x + (this.end.x - this.begin.x) * (3 / 4), 
                          this.begin.y + (this.end.y - this.begin.y) * (3 / 4));
  
  
  var dir2 = p5.Vector.sub(this.end,this.mid4);
  dir2.rotate(-2*direction);
  //dir2.rotate(direction*random(0,1));
  this.mid3 = p5.Vector.add(this.mid4,dir2);
  

  this.finished=false;
  
  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.mid1.x, this.mid1.y);
    line(this.mid1.x, this.mid1.y, this.mid2.x, this.mid2.y);
    line(this.mid2.x, this.mid2.y, this.mid3.x, this.mid3.y);
    line(this.mid3.x, this.mid3.y, this.mid4.x, this.mid4.y);
    line(this.mid4.x, this.mid4.y, this.end.x, this.end.y);
  }
  
  this.rightkoch2 =function(){
    var rightm2 = new Koch(this.mid4, this.end,this.direction);
    return rightm2;
  }
  
  this.rightkoch1 =function(){
    var rightm1 = new Koch(this.mid3, this.mid4,this.direction);
    return rightm1;
  }
  
  this.leftkoch1 =function(){
    var leftm1 = new Koch(this.begin, this.mid1,this.direction);
    return leftm1;
  }
  
  this.leftkoch2 =function(){
    var leftm2 = new Koch(this.mid1, this.mid2,this.direction);
    return leftm2;
  }
  
  this.kochc =function(){
    var centerk = new Koch(this.mid2, this.mid3,this.direction);
    return centerk;
  }
  
}
