//Class of Cantor Object [To write Cantor Function]

function Cantor(begin, end) {
  this.begin = begin;
  this.end = end;
  this.mid1 = createVector(this.begin.x + (this.end.x - this.begin.x) * (1 / 3), this.begin.y + (this.end.y - this.begin.y) / 2);
  this.mid2 = createVector(this.begin.x + (this.end.x - this.begin.x) * (2 / 3), this.begin.y + (this.end.y - this.begin.y) / 2);
  this.finished=false;
  
  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.mid1.x, this.mid1.y);
    line(this.mid1.x, this.mid1.y, this.mid2.x, this.mid2.y);
    line(this.mid2.x, this.mid2.y, this.end.x, this.end.y);
  }

  this.show2 = function() {
    stroke(255);
    line(this.mid1.x, this.mid1.y, this.mid2.x, this.mid2.y);
  }
  
  this.rightcantor =function(){
    var rightc = new Cantor(this.begin, this.mid1);
    return rightc;
  }
  
  this.leftcantor =function(){
    var leftc = new Cantor(this.mid2, this.end);
    return leftc;
  }
}