//Class to build a modified Koch curve.
//The inclination of a triangle in each iteration is used to compute the new fractal.


function Koch(begin, end, direction) {
    this.direction=direction
    this.begin = begin;
    this.end = end;
    
    
    this.mid1 = createVector(this.begin.x + (this.end.x - this.begin.x) * (1 / 3), 
                             this.begin.y + (this.end.y - this.begin.y) * (1 / 3));
    
    //this.mid1=this.begin; //This is to put the triangle at the left in each iteration, instead of the middle.
    
    
    var dir = p5.Vector.sub(this.begin,this.mid1);
    dir.rotate(direction);
    dir.rotate(direction*random(0,1)); //This is to create a random inclination fractal.
    this.mid2 = p5.Vector.add(this.mid1,dir);
    
    this.mid3 = createVector(this.begin.x + (this.end.x -this.begin.x) * (2/ 3), 
                             this.begin.y + (this.end.y - this.begin.y) * (2 / 3));
    
    
    //this.mid3 for triangle at the left.
    //this.mid3 = createVector(this.begin.x + (this.end.x - this.begin.x) * (1 / 3), 
    //                         this.begin.y + (this.end.y - this.begin.y) * (1 / 3));
    
    
    this.finished=false;
    
    this.show = function() {
      stroke(255);
      line(this.begin.x, this.begin.y, this.mid1.x, this.mid1.y);
      line(this.mid1.x, this.mid1.y, this.mid2.x, this.mid2.y);
      line(this.mid2.x, this.mid2.y, this.mid3.x, this.mid3.y);
      line(this.mid3.x, this.mid3.y, this.end.x, this.end.y);
    }
    
    this.rightkoch2 =function(){
      var rightm2 = new Koch(this.mid3, this.end,this.direction);
      return rightm2;
    }
    
    this.rightkoch1 =function(){
      var rightm1 = new Koch(this.mid2, this.mid3,this.direction);
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
  }
  