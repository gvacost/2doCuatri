import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo{
    // private patente :string;
    // private modelo:string;
    // private marca:string;
    private puertas:string;


    constructor(patente:string, modelo:string, marca:string, puertas:string){
        // this.patente = patente;
        // this.modelo = modelo;
        // this.marca = marca;
        super(patente, modelo, marca);
        this.puertas = puertas;
    }

    public getPuertas():string{
        return this.puertas;
    }
    public setPuertas(autoPuertas:string):void{
        this.puertas = autoPuertas;
    }

    // public getModelo():string{
    //     return this.modelo;
    // }
    // public setModelo(autoModelo:string):void{
    //     this.modelo = autoModelo;
    // }

    // public getMarca():string{
    //     return this.marca;
    // }
    // public setMarca(autoMarca:string):void{
    //     this.marca = autoMarca;
    // }

    // public agruparAutoData():string{
    //     return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}`;
    // }
}