
// interface IVehicle{
//     wheelcount:number;
//     enginetype:enginetype;
//     seatcount:number;
//     type:vehicletype;
//     factory():Factory;
//     printtypes():void;
// }
// abstract class Factory{
//     abstract buildVehile(seatcount:number):IVehicle
//     showspecs():string{
//         return "car specs";
//     }
// }
// class HighwaycarFactory extends Factory{
//     buildVehile(seatcount:number): IVehicle {
//         return new Highwaycar(seatcount);
//     }
// }

// class Highwaycar implements IVehicle{
//     wheelcount:number=4;
//     enginetype:enginetype="V engine";
//     seatcount: number=0;
//     type: vehicletype="4x2";
//    constructor(seatcount:number){
//     this.seatcount=seatcount;
//    }
//     factory(): Factory {
//         return new HighwaycarFactory();
//     }
//     printtypes(): void {
//         console.log("this is for high way cars");
//     }

// }
// type vehicletype="4x4"|"2x4"|"4x2"
// type enginetype= "V engine"|"Disel engine"|"Petrol engine"


