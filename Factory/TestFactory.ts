

class Car{
    wheelcount:number;
    seatnumber:number;
    constructor(wheelcount:number,seatnumber:number){
        this.wheelcount=wheelcount;
        this.seatnumber=seatnumber;
    }
    static get factory():typeof CarFactory{
        return CarFactory;
    }
}
class CarFactory{
    static fourwheels(wheelcount:number,seatcount:number){
        return new Car(wheelcount,seatcount);
    }
}
let fc = Car.factory.fourwheels(4,5);
let fc2= Car.factory.fourwheels(3,5);
console.log(fc);
console.log(fc2);
