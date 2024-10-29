import { Personaje } from "./personaje";
import { Mago } from "./mago";
import { Arquero } from "./arquero";
import { Luchador } from "./luchador";

export class Gladiador extends Luchador{
    private superDefensa: number;
    private superAtaque:number;

    constructor(nombre:string, puntosDeVida:number, time:number, powerAttack: number) {
        super(nombre, puntosDeVida, time, powerAttack);
    }

    public GetAttack(){
        return this.superAtaque;
    }
    public mencionAtaque(){
        console.log(this.nombre+': Pudiste alcanzar a tu enemigo con el desgarrar, infligiste '+this.GetAttack()+' de daño')
    }
    public setAttack():void{
        this.superAtaque = 3.5*this.powerAttack + 2*this.alcance*this.powerAttack;
    }
    public GetDefend(){
        return console.log(this.nombre+': Activaste la armadura de titanio para defenderte '+(this.superDefensa)+' de daño')
    }
    public setDefend():void{
        this.superDefensa = 3*this.powerAttack;
    }
    public getVida(){
        if(this.puntosDeVida > 0 ){
            console.log('Sigues vivo, tu vida actual es: '+this.puntosDeVida)
        }else{
            console.log('Moriste');
        }
    }
    public setVida(mago?:Mago, archer?:Arquero):void{
        if(mago && this.superDefensa<mago?.GetAttack()){
            mago.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(mago?.GetAttack()-this.superDefensa))
        }
        else if( archer && this.superDefensa < archer?.GetAttack()){
            archer.mencionAtaque();
            this.puntosDeVida = (this.puntosDeVida-(archer?.GetAttack()-this.superDefensa))

        }
        else{
            this.puntosDeVida = this.puntosDeVida;
        }
    }
   
}
