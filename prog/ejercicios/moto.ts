import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo{
    // private patente :string;
    // private modelo:string;
    // private marca:string;
    private rodado:string;

    constructor(patente:string, modelo:string, marca:string, rodado:string){
        // this.patente = patente;
        // this.modelo = modelo;
        // this.marca = marca;
        super(patente, modelo, marca)
        this.rodado = rodado;
    }


    public getRodado():string{
        return this.rodado;
    }
    public setPatente(motoRodado:string):void{
        this.rodado = motoRodado;
    }

    // public getModelo():string{
    //     return this.modelo;
    // }
    // public setModelo(motoModelo:string):void{
    //     this.modelo = motoModelo;
    // }

    // public getMarca():string{
    //     return this.marca;
    // }
    // public setMarca(motoMarca:string):void{
    //     this.marca = motoMarca;
    // }

    // public agruparMotoData():string{
    //     return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}`;
    // }
}