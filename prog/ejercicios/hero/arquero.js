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
exports.Arquero = void 0;
var personaje_1 = require("./personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, puntosDeVida, time, alcance, pAttack) {
        var _this = _super.call(this, nombre, puntosDeVida, time) || this;
        _this.alcance = alcance;
        _this.powerAttack = pAttack;
        return _this;
    }
    Arquero.prototype.GetAttack = function () {
        return this.ataque;
    };
    Arquero.prototype.mencionAtaque = function () {
        console.log(this.nombre + ': Alcanzaste a tu enemigo, infligiste ' + (this.ataque) + ' de daño');
    };
    Arquero.prototype.setAttack = function () {
        this.ataque = 0.7 * this.powerAttack + this.alcance;
    };
    Arquero.prototype.GetDefend = function () {
        return console.log(this.nombre + ': Usaste tu escudo, te defendiste ' + (this.defensa) + ' de daño');
    };
    Arquero.prototype.setDefend = function () {
        this.defensa = 0.5 * this.powerAttack;
    };
    Arquero.prototype.getVida = function () {
        if (this.puntosDeVida > 0) {
            console.log('Sigues vivo, tu vida actual es: ' + this.puntosDeVida);
        }
        else {
            console.log('Moriste');
        }
    };
    Arquero.prototype.setVida = function (fighter, mago, sFigther, sMago) {
        if (fighter && this.defensa < (fighter === null || fighter === void 0 ? void 0 : fighter.GetAttack())) {
            fighter.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((fighter === null || fighter === void 0 ? void 0 : fighter.GetAttack()) - this.defensa));
        }
        else if (mago && this.defensa < (mago === null || mago === void 0 ? void 0 : mago.GetAttack())) {
            mago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((mago === null || mago === void 0 ? void 0 : mago.GetAttack()) - this.defensa));
        }
        else if (sFigther && this.defensa < (sFigther === null || sFigther === void 0 ? void 0 : sFigther.GetAttack())) {
            sFigther.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((sFigther === null || sFigther === void 0 ? void 0 : sFigther.GetAttack()) - this.defensa));
        }
        else if (sMago && this.defensa < (sMago === null || sMago === void 0 ? void 0 : sMago.GetAttack())) {
            sMago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((sMago === null || sMago === void 0 ? void 0 : sMago.GetAttack()) - this.defensa));
        }
        else {
            this.puntosDeVida = this.puntosDeVida;
        }
    };
    Arquero.prototype.getLevel = function () {
        return this.level;
    };
    Arquero.prototype.setLevel = function () {
        for (var i = 0; i < this.time; i + 2.5) {
            this.level += 1;
        }
    };
    return Arquero;
}(personaje_1.Personaje));
exports.Arquero = Arquero;
