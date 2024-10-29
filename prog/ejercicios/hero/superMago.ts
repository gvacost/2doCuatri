import { Personaje } from "./personaje";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";
import { Mago } from "./mago";

export class SuperMago extends Mago{
    private superDefensa: number;
    private superAtaque:number;

    constructor(nombre:string, puntosDeVida:number, time:number, alcance:number, powerAbility:number) {
        super(nombre, puntosDeVida, time, alcance, powerAbility);

    }

    public GetAttack(){
        return this.superAtaque;
    }
    public mencionAtaque():void{
        console.log(this.nombre+': La prisión mágica fue efectiva, infligiste '+(this.superAtaque)+' de daño, ya no puede escapar');
    }
    public setAttack():void{
        this.superAtaque = 2*this.powerAbility + this.alcance*this.powerAbility;
    }
    public GetDefend(){
        return console.log(this.nombre+': Usaste la pared magico, te defendiste '+(this.superDefensa)+' de daño')
    }
    public setDefend():void{
        this.superDefensa = 1.5*this.powerAbility;
    }

    public getVida(){
        if(this.puntosDeVida > 0 ){
            console.log('Sigues vivo, tu vida actual es: '+this.puntosDeVida)
        }else{
             console.log('Moriste');
        }
    }
    public setVida(fighter?:Luchador, archer?:Arquero):void{
        if(fighter && this.superDefensa<fighter?.GetAttack()){
            fighter.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(fighter?.GetAttack()-this.superDefensa))
        }
        else if( archer && this.superDefensa < archer?.GetAttack()){
            this.puntosDeVida = (this.puntosDeVida-(archer?.GetAttack()-this.superDefensa))

        }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
   
   
}
