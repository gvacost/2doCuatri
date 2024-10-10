"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regAutomotor_1 = require("./regAutomotor");
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var registro = new regAutomotor_1.regAutomotor('REGISTRO 1');
var auto = new auto_1.Auto('ABC123', '1997', 'Ford', '3');
var camion = new camion_1.Camion('DFG456', '2001', 'Scania', false);
var moto = new moto_1.Moto('HIJ789', '2008', 'Yamaha', '125');
var auto1 = new auto_1.Auto('ACB123', '1997', 'Ford', '5');
var camion1 = new camion_1.Camion('DGF456', '2001', 'Scania', true);
var moto1 = new moto_1.Moto('HJI789', '2008', 'Yamaha', '150');
var camionnuevo = new camion_1.Camion('DDF234', '2000', 'Ford', true);
registro.setAgregarVehiculo(auto, moto, camion);
registro.setAgregarVehiculo(auto1, moto1, camion1);
console.log(registro.getAgregarVehiculo());
console.log(registro.getAgregarVehiculo());
registro.modifiedVehiculo('DFG456', undefined, camionnuevo);
console.log(registro.darDeBaja('ABC123'));
// console.log(camion.tieneAcoplado(false))
