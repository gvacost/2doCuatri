

export abstract class Personaje{
    protected nombre:string;
    protected level:number = 1;
    protected puntosDeVida:number;
    
    constructor(nombre:string, puntosDeVida:number){
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
    }

    public abstract GetAttack();
    public abstract GetDefend();

}