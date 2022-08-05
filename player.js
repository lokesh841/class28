class Player{
 constructor(x,y,width,height)  { 
var options = {
    isStatic:true
};
this.image= loadImage("assets/player.png")

this.width=width;
this.height=height;

this.body=Bodies.rectangle(x,y,width,height,options)

World.add(world,this.body)
}
display(){
    var pos =this.position;
    var angle =this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    this.imageMode(CENTER);

    image (this.image,0,0,this.width,this.height)
    pop ()


    }
}