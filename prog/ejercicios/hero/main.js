"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mago_1 = require("./mago");
var luchador_1 = require("./luchador");
var arquero_1 = require("./arquero");
var gladiador_1 = require("./gladiador");
var magic = new mago_1.Mago('Veigar', 750, 6, 3, 400);
var lucha = new luchador_1.Luchador('Sett', 1200, 15, 350);
var arqueero = new arquero_1.Arquero('Ashe', 600, 5, 4, 450);
// arqueero.setAttack();
// arqueero.setDefend();
// lucha.setAttack();
// lucha.setDefend();
// arqueero.setVida(lucha);
// // magic.GetAttack();
// arqueero.GetDefend();
// arqueero.getVida();
lucha.setLevel();
lucha.getLevel();
if (lucha.getLevel() == 6) {
    lucha = new gladiador_1.Gladiador(lucha.getName(), lucha.getPVida(), lucha.getTime(), lucha.getPAttack());
    lucha.setAttack();
    lucha.setAttack();
    arqueero.setDefend();
    arqueero.setVida(lucha);
    arqueero.getVida();
}
else {
    arqueero.setAttack();
    arqueero.setDefend();
    lucha.setAttack();
    lucha.setDefend();
    arqueero.setVida(lucha);
    // magic.GetAttack();
    arqueero.GetDefend();
    arqueero.getVida();
}
// class Servicios{
//     private precioSpa: number;
//     private precioDesayuno:number;
//     private precioGym:number;
//     constructor(pSpa:number, pDesayuno:number; pGym:number){
//         this.precioSpa = pSpa;
//         this.precioDesayuno = pDesayuno;
//         this.precioGym = pGym;
//     }
//     public getSpa(){
//     }
//     public setSpa(){
//     }
// }
