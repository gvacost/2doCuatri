import { Personaje } from "./personaje";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";

export class Mago extends Personaje{
    protected alcance:number;
    protected powerAbility:number;
    private defensa: number = 0;
    private ataque:number = 0;

    constructor(nombre:string, puntosDeVida:number, time:number, alcance:number, pAbility:number) {
        super(nombre, puntosDeVida, time);
        this.alcance = alcance;
        this.powerAbility = pAbility;

    }

    public GetAttack(){
        return this.ataque;
    }
    public mencionAtaque():void{
        console.log(this.nombre+': Alcanzaste a tu enemigo, infligiste '+(this.ataque)+' de daño');
    }
    public setAttack():void{
        this.ataque = 0.7*this.powerAbility + this.alcance;
    }
    public GetDefend(){
        return console.log(this.nombre+': Usaste el escudo magico, te defendiste '+(this.defensa)+' de daño')
    }
    public setDefend():void{
        this.defensa = 0.5*this.powerAbility;
    }

    public getVida(){
        if(this.puntosDeVida > 0 ){
            console.log(this.nombre+': Sigues vivo, tu vida actual es: '+this.puntosDeVida)
        }else{
             console.log(this.nombre+': Moriste');
        }
    }
    public setVida(fighter?:Luchador, archer?:Arquero):void{
        if(fighter && this.defensa<fighter?.GetAttack()){
            fighter.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(fighter?.GetAttack()-this.defensa))
        }
        else if( archer && this.defensa < archer?.GetAttack()){
            this.puntosDeVida = (this.puntosDeVida-(archer?.GetAttack()-this.defensa))

        }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
    public getLevel(){
        return this.level;
    }
    public setLevel(){
        for(let i:number =0; i<this.time; i+2){
            this.level+=1;
        }
    }
   
}
