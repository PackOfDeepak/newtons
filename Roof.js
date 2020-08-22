class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.body.width = width;
        this.body.height = height;


    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke("white");
        rect(pos.x,pos.y,width,height);
        pop(); 
    }
}