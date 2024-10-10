"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, modelo, marca) {
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.setPatente = function (vPatente) {
        this.patente = vPatente;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (vModelo) {
        this.modelo = vModelo;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (vMarca) {
        this.marca = vMarca;
    };
    Vehiculo.prototype.agruparData = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Patente: ").concat(this.patente);
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
