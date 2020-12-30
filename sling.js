class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 0
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly() {
        this.sling.bodyA = null;
        //text("Press 'space' for another chance",20,200)
      
    }
    attach(bodyA) {
        this.sling.bodyA = bodyA;
    }
    display() {
        if (this.sling.bodyA) {
            var point1 = this.sling.bodyA.position;
            var point2 = this.sling.pointB;

            strokeWeight(2);
            fill("black");
            line(point1.x, point1.y, point2.x, point2.y);
        }
    }
}