class Tree{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,100,100);
        this.image("images/tree.png")
        this.w= 100;
        this.h= 100;
        
    }
    display(){
    pos= this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.w,this.h);

    }
}