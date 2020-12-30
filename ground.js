class Ground{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			friction : 0			
			}
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
			rectMode(CENTER)
			fill("brown")
			//pos.y-5 so that the stone touches the ground
			rect(pos.x, pos.y-5,this.w, this.h+10);
	
			
	}

}