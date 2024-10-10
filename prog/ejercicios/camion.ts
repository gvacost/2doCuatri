import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo{
    // private patente :string;
    // private modelo:string;
    // private marca:string;
    private acoplado:boolean;

    constructor(patente:string, modelo:string, marca:string, acoplado:boolean){
        // this.patente = patente;
        // this.modelo = modelo;
        // this.marca = marca;
        super(patente, modelo, marca)
        this.acoplado = acoplado;
    }
    public getAcoplado():boolean{
        return this.acoplado;
    }
    public setAcoplado(acoplado:boolean):void{
        this.acoplado = acoplado;
    }
    public tieneAcoplado():string{
        if(this.acoplado == true){
            return 'Tiene acoplado';
        }else{
            return 'No tiene acoplado';
        }
    }

    // public getPatente():string{
    //     return this.patente;
    // }
    // public setPatente(camionPatente:string):void{
    //     this.patente = camionPatente;
    // }

    // public getModelo():string{
    //     return this.modelo;
    // }
    // public setModelo(camionModelo:string):void{
    //     this.modelo = camionModelo;
    // }

    // public getMarca():string{
    //     return this.marca;
    // }
    // public setMarca(camionMarca:string):void{
    //     this.marca = camionMarca;
    // }

    // public agruparCamionData():string{
    //     return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}`;
    // }
}