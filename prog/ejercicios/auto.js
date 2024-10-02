"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(patente, modelo, marca) {
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (autoPatente) {
        this.patente = autoPatente;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (autoModelo) {
        this.modelo = autoModelo;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (autoMarca) {
        this.marca = autoMarca;
    };
    Auto.prototype.agruparAutoData = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Patente: ").concat(this.patente);
    };
    return Auto;
}());
exports.Auto = Auto;
