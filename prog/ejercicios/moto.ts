export class Moto{
    private patente :string;
    private modelo:string;
    private marca:string;

    constructor(patente:string, modelo:string, marca:string){
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }

    public getPatente():string{
        return this.patente;
    }
    public setPatente(motoPatente:string):void{
        this.patente = motoPatente;
    }

    public getModelo():string{
        return this.modelo;
    }
    public setModelo(motoModelo:string):void{
        this.modelo = motoModelo;
    }

    public getMarca():string{
        return this.marca;
    }
    public setMarca(motoMarca:string):void{
        this.marca = motoMarca;
    }

    public agruparMotoData():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}`;
    }
}