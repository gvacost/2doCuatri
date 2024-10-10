import { regAutomotor } from "./regAutomotor";
import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";

let registro = new regAutomotor('REGISTRO 1');

let auto = new Auto('ABC123', '1997','Ford','3');
let camion = new Camion('DFG456', '2001', 'Scania',false);
let moto = new Moto('HIJ789', '2008', 'Yamaha', '125'); 
let auto1 = new Auto('ACB123', '1997','Ford','5');
let camion1 = new Camion('DGF456', '2001', 'Scania', true);
let moto1 = new Moto('HJI789', '2008', 'Yamaha', '150'); 
let camionnuevo = new Camion('DDF234','2000', 'Ford',true)

registro.setAgregarVehiculo(auto, moto, camion);
registro.setAgregarVehiculo(auto1, moto1, camion1);

console.log(registro.getAgregarVehiculo());
console.log(registro.getAgregarVehiculo());

registro.modifiedVehiculo('DFG456',undefined,camionnuevo);

console.log(registro.darDeBaja('ABC123'));
// console.log(camion.tieneAcoplado(false))

