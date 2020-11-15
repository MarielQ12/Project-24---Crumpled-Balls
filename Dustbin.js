class Dustbin {
constructor(x, y, width, height) {
    var options = {
        isStatic:true,
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(this.x, this.y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("purple");
    fill("pink");
    rect(0, 0, this.width, this.height);
    pop();
  }
}