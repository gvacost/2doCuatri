import { Personaje } from "./personaje";
import { Mago } from "./mago";
import { Arquero } from "./arquero";

export class Luchador extends Personaje{
    private alcance:number = 1;
    private powerAttack:number;
    private defensa: number;
    private ataque:number;

    constructor(nombre:string, puntosDeVida:number, pAttack: number) {
        super(nombre, puntosDeVida);
        this.powerAttack = pAttack;
    }

    public GetAttack(){
        console.log('Golpeaste a tu enemigo, infligiste '+(this.ataque)+' de daño')
        return this.ataque;
    }
    public setAttack():void{
        this.ataque = 0.7*this.powerAttack + this.alcance;
    }
    public GetDefend(){
        return console.log('Usaste el escudo magico, te defendiste '+(this.defensa)+' de daño')
    }
    public setDefend():void{
        this.defensa = 0.5*this.powerAttack;
    }
    public getVida(){
        if(this.puntosDeVida > 0 ){
           return console.log('Sigues vivo')
        }else{
            return console.log('Moriste');
        }
    }
    public setVida(mago?:Mago, archer?:Arquero):void{
        if(mago && this.defensa<mago?.GetAttack()){
        this.puntosDeVida = (this.puntosDeVida-(mago?.GetAttack()-this.defensa))
        }
        else if( archer && this.defensa < archer?.GetAttack()){
            this.puntosDeVida = (this.puntosDeVida-(archer?.GetAttack()-this.defensa))

        }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
   
   
}
