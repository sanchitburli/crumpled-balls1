class Paper {
    constructor(x,y) {
      var options = {
          restitution : 0.3,
          friction : 0.5,
          density : 1.2,
          isStatic: false
      }
      this.radius = 40
      this.body = Bodies.circle(x,y,this.radius/2,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(CENTER);
      fill("red");
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };
