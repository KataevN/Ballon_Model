class Triangle
{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calculateVolume(){
        let AB = (new Edge(this.a, this.b)).length();
        let BC = (new Edge(this.b, this.c)).length();
        let AC = (new Edge(this.a, this.c)).length();
        let perimeter = AB + BC + AC;
        let p = perimeter / 2;
        let S = Math.pow(p * (p - AB) * (p - BC) * (p - AC), 0.5);
        return S;
    }
}