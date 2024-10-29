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
exports.SuperMago = void 0;
var mago_1 = require("./mago");
var SuperMago = /** @class */ (function (_super) {
    __extends(SuperMago, _super);
    function SuperMago(nombre, puntosDeVida, time, alcance, powerAbility) {
        return _super.call(this, nombre, puntosDeVida, time, alcance, powerAbility) || this;
    }
    SuperMago.prototype.GetAttack = function () {
        return this.superAtaque;
    };
    SuperMago.prototype.prisionMagica = function () {
        console.log(this.nombre + ': La prisión mágica fue efectiva, infligiste ' + (this.superAtaque) + ' de daño, ya no puede escapar');
    };
    SuperMago.prototype.setAttack = function () {
        this.superAtaque = 2 * this.powerAbility + this.alcance * this.powerAbility;
    };
    SuperMago.prototype.GetDefend = function () {
        return console.log(this.nombre + ': Usaste la pared magico, te defendiste ' + (this.superDefensa) + ' de daño');
    };
    SuperMago.prototype.setDefend = function () {
        this.superDefensa = 1.5 * this.powerAbility;
    };
    SuperMago.prototype.getVida = function () {
        if (this.puntosDeVida > 0) {
            console.log('Sigues vivo, tu vida actual es: ' + this.puntosDeVida);
        }
        else {
            console.log('Moriste');
        }
    };
    SuperMago.prototype.setVida = function (fighter, archer) {
        if (fighter && this.superDefensa < (fighter === null || fighter === void 0 ? void 0 : fighter.GetAttack())) {
            fighter.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((fighter === null || fighter === void 0 ? void 0 : fighter.GetAttack()) - this.superDefensa));
        }
        else if (archer && this.superDefensa < (archer === null || archer === void 0 ? void 0 : archer.GetAttack())) {
            this.puntosDeVida = (this.puntosDeVida - ((archer === null || archer === void 0 ? void 0 : archer.GetAttack()) - this.superDefensa));
        }
        else {
            this.puntosDeVida = this.puntosDeVida;
        }
    };
    return SuperMago;
}(mago_1.Mago));
exports.SuperMago = SuperMago;
