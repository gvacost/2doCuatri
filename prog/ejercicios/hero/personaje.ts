

export abstract class Personaje{
    protected nombre:string;
    protected level:number ;
    protected puntosDeVida:number;
    protected time: number;
    
    constructor(nombre:string, puntosDeVida:number, time:number){
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
        this.time = time;
    }

    public abstract GetAttack();
    public abstract GetDefend();

}