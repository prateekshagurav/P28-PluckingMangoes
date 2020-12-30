class Mango {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 0,
            density: 2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.d = r * 2;
        World.add(world, this.body);
        this.image = loadImage("images/mango.png");
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.d, this.d);
        pop();
    }
}