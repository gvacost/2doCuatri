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
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, puntosDeVida, alcance, pAbility) {
        var _this = _super.call(this, nombre, puntosDeVida) || this;
        _this.defensa = 0;
        _this.ataque = 0;
        _this.alcance = alcance;
        _this.powerAbility = pAbility;
        return _this;
    }
    Mago.prototype.GetAttack = function () {
        console.log('Alcanzaste a tu enemigo, infligiste ' + (this.ataque) + ' de daño');
        return this.ataque;
    };
    Mago.prototype.setAttack = function () {
        this.ataque = 0.7 * this.powerAbility + this.alcance;
    };
    Mago.prototype.GetDefend = function () {
        return console.log('Usaste el escudo magico, te defendiste ' + (this.defensa) + ' de daño');
    };
    Mago.prototype.setDefend = function () {
        this.defensa = 0.5 * this.powerAbility;
    };
    Mago.prototype.getVida = function () {
        if (this.puntosDeVida > 0) {
            return console.log('Sigues vivo');
        }
        else {
            return console.log('Moriste');
        }
    };
    Mago.prototype.setVida = function (fighter, archer) {
        if (fighter && this.defensa < (fighter === null || fighter === void 0 ? void 0 : fighter.GetAttack())) {
            this.puntosDeVida = (this.puntosDeVida - ((fighter === null || fighter === void 0 ? void 0 : fighter.GetAttack()) - this.defensa));
        }
        else if (archer && this.defensa < (archer === null || archer === void 0 ? void 0 : archer.GetAttack())) {
            this.puntosDeVida = (this.puntosDeVida - ((archer === null || archer === void 0 ? void 0 : archer.GetAttack()) - this.defensa));
        }
        else {
            this.puntosDeVida = this.puntosDeVida;
        }
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
