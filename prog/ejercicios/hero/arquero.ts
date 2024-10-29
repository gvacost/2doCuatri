import { Personaje } from "./personaje";
import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Gladiador } from "./gladiador";
import { SuperMago } from "./superMago";

export class Arquero extends Personaje{
    protected alcance:number;
    protected powerAttack: number;
    private ataque:number;
    private defensa:number;

    constructor(nombre:string, puntosDeVida:number, time:number, alcance:number, pAttack:number) {
        super(nombre, puntosDeVida, time);
        this.alcance = alcance;
        this.powerAttack = pAttack;
    }

    public GetAttack(){
        return this.ataque;
    }
    public mencionAtaque():void{
        console.log(this.nombre+': Alcanzaste a tu enemigo, infligiste '+(this.ataque)+' de daño')
    }
    public setAttack():void{
        this.ataque = 0.7*this.powerAttack + this.alcance;
    }

    public GetDefend(){
        return console.log(this.nombre+': Usaste tu escudo, te defendiste '+(this.defensa)+' de daño')
    }
    public setDefend():void{
        this.defensa = 0.5*this.powerAttack;
    }

    public getVida(){
        if(this.puntosDeVida > 0 ){
            console.log(this.nombre+': Sigues vivo, tu vida actual es: '+this.puntosDeVida)
        }else{
            console.log(this.nombre+': Moriste');
        }
    }
    public setVida(fighter?:Luchador, mago?:Mago):void{
        if(fighter && this.defensa<fighter?.GetAttack()){
            fighter.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(fighter?.GetAttack()-this.defensa))
        }
        else if( mago && this.defensa < mago?.GetAttack()){
            mago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(mago?.GetAttack()-this.defensa))

        }
        // else if(sFigther && this.defensa<sFigther?.GetAttack()){
        //     sFigther.mencionAtaque();
        //     this.puntosDeVida = (this.puntosDeVida-(sFigther?.GetAttack()-this.defensa))
        // }
        // else if( sMago && this.defensa < sMago?.GetAttack()){
        //     sMago.mencionAtaque();
        //     this.puntosDeVida = (this.puntosDeVida-(sMago?.GetAttack()-this.defensa))
        // }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
    public getLevel(){
        return this.level;
    }
    public setLevel(){
        for(let i:number =0; i<this.time; i+2.5){
            this.level+=1;
        }
    }   
}
