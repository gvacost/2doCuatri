import { Personaje } from "./personaje";
import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";

export class ArqueroReal extends Arquero{
    private superDefensa: number;
    private superAtaque:number;

    constructor(nombre:string, puntosDeVida:number, time:number, alcance:number, pAttack:number) {
        super(nombre, puntosDeVida, time,alcance, pAttack );
        
    }

    public GetAttack(){
        return this.superAtaque;
    }
    public mencionAtaque():void{
        console.log(this.nombre+': Congelaste a tu enemigo con la flecha de cristal, infligiste '+(this.superAtaque)+' de daño, tiempo restante hasta descongelamiento 3 minutos')
    }
    public setAttack():void{
        this.superAtaque = 3*this.powerAttack + this.alcance*this.powerAttack;
    }

    public GetDefend(){
        return console.log(this.nombre+': Activaste tu Manto Real, te defendiste '+(this.superDefensa)+' de daño')
    }
    public setDefend():void{
        this.superDefensa = 2*this.powerAttack;
    }

    public getVida(){
        if(this.puntosDeVida > 0 ){
            console.log('Sigues vivo, tu vida actual es: '+this.puntosDeVida)
        }else{
            console.log('Moriste');
        }
    }
    public setVida(fighter?:Luchador, mago?:Mago):void{
        if(fighter && this.superDefensa<fighter?.GetAttack()){
            fighter.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(fighter?.GetAttack()-this.superDefensa))
        }
        else if( mago && this.superDefensa < mago?.GetAttack()){
            mago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(mago?.GetAttack()-this.superDefensa))

        }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
    
}
