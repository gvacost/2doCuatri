
export class Auto{
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
    public setPatente(autoPatente:string):void{
        this.patente = autoPatente;
    }

    public getModelo():string{
        return this.modelo;
    }
    public setModelo(autoModelo:string):void{
        this.modelo = autoModelo;
    }

    public getMarca():string{
        return this.marca;
    }
    public setMarca(autoMarca:string):void{
        this.marca = autoMarca;
    }

    public agruparAutoData():string{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Patente: ${this.patente}`;
    }
}