class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("orange");
      fill("yellow");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };