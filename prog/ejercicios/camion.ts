export class Camion{
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
    public setPatente(camionPatente:string):void{
        this.patente = camionPatente;
    }

    public getModelo():string{
        return this.modelo;
    }
    public setModelo(camionModelo:string):void{
        this.modelo = camionModelo;
    }

    public getMarca():string{
        return this.marca;
    }
    public setMarca(camionMarca:string):void{
        this.marca = camionMarca;
    }

    public agruparCamionData():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}`;
    }
}