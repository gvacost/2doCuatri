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
exports.ArqueroReal = void 0;
var arquero_1 = require("./arquero");
var ArqueroReal = /** @class */ (function (_super) {
    __extends(ArqueroReal, _super);
    function ArqueroReal(nombre, puntosDeVida, time, alcance, pAttack) {
        return _super.call(this, nombre, puntosDeVida, time, alcance, pAttack) || this;
    }
    ArqueroReal.prototype.GetAttack = function () {
        return this.superAtaque;
    };
    ArqueroReal.prototype.flechaCristal = function () {
        console.log(this.nombre + ': Congelaste a tu enemigo, infligiste ' + (this.superAtaque) + ' de daño, tiempo restante hasta descongelamiento 3 minutos');
    };
    ArqueroReal.prototype.setAttack = function () {
        this.superAtaque = 3 * this.powerAttack + this.alcance * this.powerAttack;
    };
    ArqueroReal.prototype.MantoReal = function () {
        return console.log(this.nombre + ': Activaste tu Manto Real, te defendiste ' + (this.superDefensa) + ' de daño');
    };
    ArqueroReal.prototype.setDefend = function () {
        this.superDefensa = 2 * this.powerAttack;
    };
    ArqueroReal.prototype.getVida = function () {
        if (this.puntosDeVida > 0) {
            console.log('Sigues vivo, tu vida actual es: ' + this.puntosDeVida);
        }
        else {
            console.log('Moriste');
        }
    };
    ArqueroReal.prototype.setVida = function (fighter, mago) {
        if (fighter && this.superDefensa < (fighter === null || fighter === void 0 ? void 0 : fighter.GetAttack())) {
            fighter.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((fighter === null || fighter === void 0 ? void 0 : fighter.GetAttack()) - this.superDefensa));
        }
        else if (mago && this.superDefensa < (mago === null || mago === void 0 ? void 0 : mago.GetAttack())) {
            mago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((mago === null || mago === void 0 ? void 0 : mago.GetAttack()) - this.superDefensa));
        }
        else {
            this.puntosDeVida = this.puntosDeVida;
        }
    };
    return ArqueroReal;
}(arquero_1.Arquero));
exports.ArqueroReal = ArqueroReal;
