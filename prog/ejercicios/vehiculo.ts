
export class Vehiculo{
    protected patente :string;
    protected modelo:string;
    protected marca:string;


    constructor(patente:string, modelo:string, marca:string){
        this.patente = patente;
        this.modelo = modelo;
        this.marca = marca;
    }

    public getPatente():string{
        return this.patente;
    }
    public setPatente(vPatente:string):void{
        this.patente = vPatente;
    }

    public getModelo():string{
        return this.modelo;
    }
    public setModelo(vModelo:string):void{
        this.modelo = vModelo;
    }

    public getMarca():string{
        return this.marca;
    }
    public setMarca(vMarca:string):void{
        this.marca = vMarca;
    }

    public agruparData():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}`;
    }
}