import { Vehiculo } from "./vehiculo";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

export class regAutomotor{
    
    private listado:string[];
    // private auto: Auto;
    // private moto: Moto;
    // private camion: Camion;
    private registro:string;

constructor(registro:string, ){
    this.registro = registro;
    this.listado = [];

}


public getAgregarVehiculo():string[]{
    return this.listado;
}
public setAgregarVehiculo(auto?:Auto, moto?:Moto, camion?:Camion):void{  //tuve que ingresar esos parametros como opcionales
    if(auto){                                                            //porque sino no me dejaba agregar varios vehiculos y me                
        this.listado.push(`Auto: ${auto.agruparData()}`)             //los reescribia
    }
    if(camion){
        this.listado.push(`Camion: ${camion.agruparData()}, ${camion.tieneAcoplado()}`)
    }
    if(moto){
        this.listado.push(`Moto: ${moto.agruparData()}`)
    }
}
public modifiedVehiculo(datoViejo:string, auto?: Auto, camion?:Camion, moto?:Moto):void{    //ingresar como param. los datos del vehiculo, instanciar el vehiculo y reemplazarlo en el array?

    let vehiculoAMod = this.listado.findIndex((entry) => entry.includes(`Patente: ${datoViejo}`)); //Con esto busco el indice para el cual 

    if(auto){                                                                            
        this.listado[vehiculoAMod] = (`Auto: ${auto.agruparData()}`)             
    }
    if(camion){
        this.listado[vehiculoAMod] =(`Camion: ${camion.agruparData()}, ${camion.tieneAcoplado()}`)
    }
    if(moto){
        this.listado[vehiculoAMod] = (`Moto: ${moto.agruparData()}`)
    }
}
public darDeBaja(patenteToEliminate:string):string[]{
    let indexBaja = this.listado.findIndex((entry) => entry.includes(`Patente: ${patenteToEliminate}`)); //Con esto busco el indice para el cual 
    if (indexBaja !=-1){                                                                                 //coincide la patente                           
        this.listado.splice(indexBaja,1);                       //Aca elimino ese indice del listado
    }
    else{
        console.log('La patente no esta en el listado')
    }
    return this.listado;

}
}


