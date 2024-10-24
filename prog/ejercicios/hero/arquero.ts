import { Personaje } from "./personaje";
import { Mago } from "./mago";
import { Luchador } from "./luchador";

export class Arquero extends Personaje{
    private alcance:number;
    private powerAttack: number;
    private ataque:number;
    private defensa:number;

    constructor(nombre:string, puntosDeVida:number, alcance:number, pAttack:number) {
        super(nombre, puntosDeVida);
        this.alcance = alcance;
        this.powerAttack = pAttack;
    }

    public GetAttack(){
        console.log('Alcanzaste a tu enemigo, infligiste '+(this.ataque)+' de daño')
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
    public setVida(fighter?:Luchador, mago?:Mago):void{
        if(fighter && this.defensa<fighter?.GetAttack()){
        this.puntosDeVida = (this.puntosDeVida-(fighter?.GetAttack()-this.defensa))
        }
        else if( mago && this.defensa < mago?.GetAttack()){
            this.puntosDeVida = (this.puntosDeVida-(mago?.GetAttack()-this.defensa))

        }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
   
   
}
