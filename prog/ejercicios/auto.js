"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var vehiculo_1 = require("./vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(patente, modelo, marca, puertas) {
        // this.patente = patente;
        // this.modelo = modelo;
        // this.marca = marca;
        var _this = _super.call(this, patente, modelo, marca) || this;
        _this.puertas = puertas;
        return _this;
    }
    Auto.prototype.getPuertas = function () {
        return this.puertas;
    };
    Auto.prototype.setPuertas = function (autoPuertas) {
        this.puertas = autoPuertas;
    };
    return Auto;
}(vehiculo_1.Vehiculo));
exports.Auto = Auto;
