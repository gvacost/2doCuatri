import { Personaje } from "./personaje";
import { Mago } from "./mago";
import { Arquero } from "./arquero";

export class Luchador extends Personaje{
    protected alcance:number = 1;
    protected powerAttack:number;
    private defensa: number;
    private ataque:number;

    constructor(nombre:string, puntosDeVida:number, time:number, pAttack: number) {
        super(nombre, puntosDeVida, time);
        this.powerAttack = pAttack;
    }

    public GetAttack(){
        return this.ataque;
    }
    public mencionAtaque():void{
        console.log(this.nombre+': Golpeaste a tu enemigo, infligiste '+(this.ataque)+' de daño')
    }
    public setAttack():void{
        this.ataque = 0.7*this.powerAttack + this.alcance;
    }
    public GetDefend(){
        return console.log(this.nombre+': Usaste tus brazos para defenderte '+(this.defensa)+' de daño')
    }
    public setDefend():void{
        this.defensa = 0.3*this.powerAttack;
    }
    public getVida(){
        if(this.puntosDeVida > 0 ){
            console.log(this.nombre+': Sigues vivo, tu vida actual es: '+this.puntosDeVida)
        }else{
            console.log(this.nombre+': Moriste');
        }
    }
    public setVida(mago?:Mago, archer?:Arquero):void{
        if(mago && this.defensa<mago?.GetAttack()){
            mago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(mago?.GetAttack()-this.defensa))
        }
        else if( archer && this.defensa < archer?.GetAttack()){
            archer.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(archer?.GetAttack()-this.defensa))

        }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
    public getLevel(){
        return this.level;
    }
    public setLevel():void{
        let lvl:number = 0;
        for(let i:number =0; i<=this.time; i+=3){
            lvl+=1;
        }
        this.level = lvl;
    }
   public getPAttack():number{
    return this.powerAttack;
   }
   public getName():string{
    return this.nombre;
   }
   public getTime():number{
    return this.time;
   }
   public getPVida():number{
    return this.puntosDeVida;
   }
}
