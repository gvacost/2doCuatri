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
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(patente, modelo, marca, acoplado) {
        // this.patente = patente;
        // this.modelo = modelo;
        // this.marca = marca;
        var _this = _super.call(this, patente, modelo, marca) || this;
        _this.acoplado = acoplado;
        return _this;
    }
    Camion.prototype.getAcoplado = function () {
        return this.acoplado;
    };
    Camion.prototype.setAcoplado = function (acoplado) {
        this.acoplado = acoplado;
    };
    Camion.prototype.tieneAcoplado = function () {
        if (this.acoplado == true) {
            return 'Tiene acoplado';
        }
        else {
            return 'No tiene acoplado';
        }
    };
    return Camion;
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
