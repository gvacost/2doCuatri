"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(patente, modelo, marca) {
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    Moto.prototype.setPatente = function (motoPatente) {
        this.patente = motoPatente;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.setModelo = function (motoModelo) {
        this.modelo = motoModelo;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.setMarca = function (motoMarca) {
        this.marca = motoMarca;
    };
    Moto.prototype.agruparMotoData = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Patente: ").concat(this.patente);
    };
    return Moto;
}());
exports.Moto = Moto;
