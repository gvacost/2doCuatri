"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(patente, modelo, marca) {
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    Camion.prototype.setPatente = function (camionPatente) {
        this.patente = camionPatente;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.setModelo = function (camionModelo) {
        this.modelo = camionModelo;
    };
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.setMarca = function (camionMarca) {
        this.marca = camionMarca;
    };
    Camion.prototype.agruparCamionData = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Patente: ").concat(this.patente);
    };
    return Camion;
}());
exports.Camion = Camion;
