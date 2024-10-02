"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registroAutomotor = void 0;
var registroAutomotor = /** @class */ (function () {
    function registroAutomotor(registro) {
        this.registro = registro;
        this.listado = [];
    }
    registroAutomotor.prototype.getAgregarVehiculo = function () {
        return this.listado;
    };
    registroAutomotor.prototype.setAgregarVehiculo = function (auto, moto, camion) {
        if (auto) { //porque sino no me dejaba agregar varios vehiculos y me                
            this.listado.push("Auto: ".concat(auto.agruparAutoData())); //los reescribia
        }
        if (camion) {
            this.listado.push("Camion: ".concat(camion.agruparCamionData()));
        }
        if (moto) {
            this.listado.push("Moto: ".concat(moto.agruparMotoData()));
        }
    };
    registroAutomotor.prototype.modifiedVehiculo = function (datoViejo, auto, camion, moto) {
        var vehiculoAMod = this.listado.findIndex(function (entry) { return entry.includes("Patente: ".concat(datoViejo)); }); //Con esto busco el indice para el cual 
        if (auto) {
            this.listado[vehiculoAMod] = ("Auto: ".concat(auto.agruparAutoData()));
        }
        if (camion) {
            this.listado[vehiculoAMod] = ("Camion: ".concat(camion.agruparCamionData()));
        }
        if (moto) {
            this.listado[vehiculoAMod] = ("Moto: ".concat(moto.agruparMotoData()));
        }
    };
    registroAutomotor.prototype.darDeBaja = function (patenteToEliminate) {
        var indexBaja = this.listado.findIndex(function (entry) { return entry.includes("Patente: ".concat(patenteToEliminate)); }); //Con esto busco el indice para el cual 
        if (indexBaja != -1) { //coincide la patente                           
            this.listado.splice(indexBaja, 1); //Aca elimino ese indice del listado
        }
        else {
            console.log('La patente no esta en el listado');
        }
        return this.listado;
    };
    return registroAutomotor;
}());
exports.registroAutomotor = registroAutomotor;
