import { registroAutomotor } from "./registroAutomotor";
import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";

let registro = new registroAutomotor('REGISTRO 1');

let auto = new Auto('ABC123', '1997','Ford');
let camion = new Camion('DFG456', '2001', 'Scania');
let moto = new Moto('HIJ789', '2008', 'Yamaha'); 
let auto1 = new Auto('ACB123', '1997','Ford');
let camion1 = new Camion('DGF456', '2001', 'Scania');
let moto1 = new Moto('HJI789', '2008', 'Yamaha'); 
let camionnuevo = new Camion('DDF234','2000', 'Ford')

registro.setAgregarVehiculo(auto, moto, camion);
registro.setAgregarVehiculo(auto1, moto1, camion1);
registro.modifiedVehiculo('DFG456',undefined,camionnuevo);

console.log(registro.getAgregarVehiculo());
console.log(registro.getAgregarVehiculo());

console.log(registro.darDeBaja('ABC123'));

