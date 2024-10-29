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
exports.Luchador = void 0;
var personaje_1 = require("./personaje");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre, puntosDeVida, time, pAttack) {
        var _this = _super.call(this, nombre, puntosDeVida, time) || this;
        _this.alcance = 1;
        _this.powerAttack = pAttack;
        return _this;
    }
    Luchador.prototype.GetAttack = function () {
        return this.ataque;
    };
    Luchador.prototype.mencionAtaque = function () {
        console.log(this.nombre + ': Golpeaste a tu enemigo, infligiste ' + (this.ataque) + ' de daño');
    };
    Luchador.prototype.setAttack = function () {
        this.ataque = 0.7 * this.powerAttack + this.alcance;
    };
    Luchador.prototype.GetDefend = function () {
        return console.log(this.nombre + ': Usaste tus brazos para defenderte ' + (this.defensa) + ' de daño');
    };
    Luchador.prototype.setDefend = function () {
        this.defensa = 0.3 * this.powerAttack;
    };
    Luchador.prototype.getVida = function () {
        if (this.puntosDeVida > 0) {
            console.log('Sigues vivo, tu vida actual es: ' + this.puntosDeVida);
        }
        else {
            console.log('Moriste');
        }
    };
    Luchador.prototype.setVida = function (mago, archer) {
        if (mago && this.defensa < (mago === null || mago === void 0 ? void 0 : mago.GetAttack())) {
            mago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((mago === null || mago === void 0 ? void 0 : mago.GetAttack()) - this.defensa));
        }
        else if (archer && this.defensa < (archer === null || archer === void 0 ? void 0 : archer.GetAttack())) {
            archer.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida - ((archer === null || archer === void 0 ? void 0 : archer.GetAttack()) - this.defensa));
        }
        else {
            this.puntosDeVida = this.puntosDeVida;
        }
    };
    Luchador.prototype.getLevel = function () {
        return this.level;
    };
    Luchador.prototype.setLevel = function () {
        var lvl = 0;
        for (var i = 0; i <= this.time; i += 3) {
            lvl += 1;
        }
        this.level = lvl;
    };
    Luchador.prototype.getPAttack = function () {
        return this.powerAttack;
    };
    Luchador.prototype.getName = function () {
        return this.nombre;
    };
    Luchador.prototype.getTime = function () {
        return this.time;
    };
    Luchador.prototype.getPVida = function () {
        return this.puntosDeVida;
    };
    return Luchador;
}(personaje_1.Personaje));
exports.Luchador = Luchador;
