import { Personaje } from "./personaje";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";

export class Mago extends Personaje{
    private alcance:number;
    private powerAbility:number;
    private defensa: number = 0;
    private ataque:number = 0;

    constructor(nombre:string, puntosDeVida:number, alcance:number, pAbility:number) {
        super(nombre, puntosDeVida);
        this.alcance = alcance;
        this.powerAbility = pAbility;

    }

    public GetAttack(){
        console.log('Alcanzaste a tu enemigo, infligiste '+(this.ataque)+' de daño');
        return this.ataque;
    }
    public setAttack():void{
        this.ataque = 0.7*this.powerAbility + this.alcance;
    }
    public GetDefend(){
        return console.log('Usaste el escudo magico, te defendiste '+(this.defensa)+' de daño')
    }
    public setDefend():void{
        this.defensa = 0.5*this.powerAbility;
    }

    public getVida(){
        if(this.puntosDeVida > 0 ){
           return console.log('Sigues vivo')
        }else{
            return console.log('Moriste');
        }
    }
    public setVida(fighter?:Luchador, archer?:Arquero):void{
        if(fighter && this.defensa<fighter?.GetAttack()){
        this.puntosDeVida = (this.puntosDeVida-(fighter?.GetAttack()-this.defensa))
        }
        else if( archer && this.defensa < archer?.GetAttack()){
            this.puntosDeVida = (this.puntosDeVida-(archer?.GetAttack()-this.defensa))

        }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
   
}
