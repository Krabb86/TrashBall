class Paper{
  constructor(x , y, width ,){
            var options = {
                isStatic: false,
                restitution:0.3,
                friction:0.8,
                density:1.2
            }
            this.body = Bodies.circle(x, y, width, options );
            this.width = width;
            
    
            World.add(world,this.body);
        }
        display(){
          var pos = this.body.position;
          ellipseMode(RADIUS);
          fill(255);
          ellipse(pos.x , pos.y,this.width,this.width);
          pop();
    
    
        }
    
    

    





}
