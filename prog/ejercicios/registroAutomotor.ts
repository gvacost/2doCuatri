import { Auto } from "./auto";
import { Camion } from "./camion";
import { Moto } from "./moto";

export class registroAutomotor{
    
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
        this.listado.push(`Auto: ${auto.agruparAutoData()}`)             //los reescribia
    }
    if(camion){
        this.listado.push(`Camion: ${camion.agruparCamionData()}`)
    }
    if(moto){
        this.listado.push(`Moto: ${moto.agruparMotoData()}`)
    }
}
public modifiedVehiculo(datoViejo:string, auto?: Auto, camion?:Camion, moto?:Moto):void{    //ingresar como param. los datos del vehiculo, instanciar el vehiculo y reemplazarlo en el array?

    let vehiculoAMod = this.listado.findIndex((entry) => entry.includes(`Patente: ${datoViejo}`)); //Con esto busco el indice para el cual 

    if(auto){                                                                            
        this.listado[vehiculoAMod] = (`Auto: ${auto.agruparAutoData()}`)             
    }
    if(camion){
        this.listado[vehiculoAMod] =(`Camion: ${camion.agruparCamionData()}`)
    }
    if(moto){
        this.listado[vehiculoAMod] = (`Moto: ${moto.agruparMotoData()}`)
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


