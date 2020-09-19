class SlingShot {
    constructor (body, point){
        var options = {
            bodyA : body, 
            pointB : point,
            stiffness : 0.05,
            length : 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);  
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
        }
           
    }
    fly(){
        this.chain.bodyA = null;
    }
}
