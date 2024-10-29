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
exports.Gladiador = void 0;
var luchador_1 = require("./luchador");
var Gladiador = /** @class */ (function (_super) {
    __extends(Gladiador, _super);
    function Gladiador(nombre, puntosDeVida, time, powerAttack) {
        return _super.call(this, nombre, puntosDeVida, time, powerAttack) || this;
    }
    Gladiador.prototype.GetAttack = function () {
        return this.superAtaque;
    };
    Gladiador.prototype.mencionAtaque = function () {
        console.log(this.nombre + ': Pudiste alcanzar a tu enemigo con el desgarrar, infligiste ' + this.GetAttack() + ' de daño');
    };
    Gladiador.prototype.setAttack = function () {
        this.superAtaque = 3.5 * this.powerAttack + 2 * this.alcance * this.powerAttack;
    };
    Gladiador.prototype.GetDefend = function () {
        return console.log(this.nombre + ': Activaste la armadura de titanio para defenderte ' + (this.superDefensa) + ' de daño');
    };
    Gladiador.prototype.setDefend = function () {
        this.superDefensa = 3 * this.powerAttack;
    };
    Gladiador.prototype.getVida = function () {
        if (this.puntosDeVida > 0) {
            console.log('Sigues vivo, tu vida actual es: ' + this.puntosDeVida);
        }
        else {
            console.log('Moriste');
        }
    };
    Gladiador.prototype.setVida = function (mago, archer) {
        if (mago && this.superDefensa < (mago === null || mago === void 0 ? void 0 : mago.GetAttack())) {
            mago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((mago === null || mago === void 0 ? void 0 : mago.GetAttack()) - this.superDefensa));
        }
        else if (archer && this.superDefensa < (archer === null || archer === void 0 ? void 0 : archer.GetAttack())) {
            archer.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((archer === null || archer === void 0 ? void 0 : archer.GetAttack()) - this.superDefensa));
        }
        else {
            this.puntosDeVida = this.puntosDeVida;
        }
    };
    return Gladiador;
}(luchador_1.Luchador));
exports.Gladiador = Gladiador;
