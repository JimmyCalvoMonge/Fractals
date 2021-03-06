//Class of a curve that is not monotonic in ANY subinterval of [a,b]

function Mono(begin, end) {
    this.begin = begin;
    this.end = end;
    
    var a = (this.end.y-this.begin.y)/abs(this.end.y-this.begin.y);
    var b = abs(this.end.y-this.begin.y);
    
    this.mid1 = createVector(this.begin.x + (this.end.x - this.begin.x) * (1 / 3), 
                             this.begin.y + (3/4)*a*b);
    this.mid2 = createVector(this.begin.x + (this.end.x - this.begin.x) * (2/ 3), 
                             this.begin.y + (1/4)*a*b);
    
    this.finished=false;
    
    this.show = function() {
      stroke(255);
      line(this.begin.x, this.begin.y, this.mid1.x, this.mid1.y);
      line(this.mid1.x, this.mid1.y, this.mid2.x, this.mid2.y);
      line(this.mid2.x, this.mid2.y, this.end.x, this.end.y);
    }
    
    this.rightmono =function(){
      var rightm = new Mono(this.mid2, this.end);
      return rightm;
    }
    
    this.leftmono =function(){
      var leftm = new Mono(this.begin, this.mid1);
      return leftm;
    }
    
    this.centermono =function(){
      var centerm = new Mono(this.mid1, this.mid2);
      return centerm;
    }
  }
  