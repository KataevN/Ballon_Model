class Vector {

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    length(){
        let dx = Math.pow(this.x ,2);
        let dy = Math.pow(this.y, 2);
        return Math.pow(dx + dy, 0.5);
    }

    rotateVector(alpha){
        let cos = Math.cos(alpha);
        let sin = Math.sin(alpha);

        let x = this.x * cos - this.y * sin;
        let y = this.x * sin + this.y * cos;

        let new_vector = new Vector(x, y);
        return new_vector;
    }

    multiplyVector(number){
        let x = this.x * number;
        let y = this.y * number;
        let new_vector = new Vector(x, y);
        return new_vector;
    }

    addVector(vector){
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
}