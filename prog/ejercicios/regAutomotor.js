"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regAutomotor = void 0;
var regAutomotor = /** @class */ (function () {
    function regAutomotor(registro) {
        this.registro = registro;
        this.listado = [];
    }
    regAutomotor.prototype.getAgregarVehiculo = function () {
        return this.listado;
    };
    regAutomotor.prototype.setAgregarVehiculo = function (auto, moto, camion) {
        if (auto) { //porque sino no me dejaba agregar varios vehiculos y me                
            this.listado.push("Auto: ".concat(auto.agruparData())); //los reescribia
        }
        if (camion) {
            this.listado.push("Camion: ".concat(camion.agruparData(), ", ").concat(camion.tieneAcoplado()));
        }
        if (moto) {
            this.listado.push("Moto: ".concat(moto.agruparData()));
        }
    };
    regAutomotor.prototype.modifiedVehiculo = function (datoViejo, auto, camion, moto) {
        var vehiculoAMod = this.listado.findIndex(function (entry) { return entry.includes("Patente: ".concat(datoViejo)); }); //Con esto busco el indice para el cual 
        if (auto) {
            this.listado[vehiculoAMod] = ("Auto: ".concat(auto.agruparData()));
        }
        if (camion) {
            this.listado[vehiculoAMod] = ("Camion: ".concat(camion.agruparData(), ", ").concat(camion.tieneAcoplado()));
        }
        if (moto) {
            this.listado[vehiculoAMod] = ("Moto: ".concat(moto.agruparData()));
        }
    };
    regAutomotor.prototype.darDeBaja = function (patenteToEliminate) {
        var indexBaja = this.listado.findIndex(function (entry) { return entry.includes("Patente: ".concat(patenteToEliminate)); }); //Con esto busco el indice para el cual 
        if (indexBaja != -1) { //coincide la patente                           
            this.listado.splice(indexBaja, 1); //Aca elimino ese indice del listado
        }
        else {
            console.log('La patente no esta en el listado');
        }
        return this.listado;
    };
    return regAutomotor;
}());
exports.regAutomotor = regAutomotor;
