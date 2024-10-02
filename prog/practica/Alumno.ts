
export class Alumno{
    private nombre:string;
    private apellido:string;
    private edad:number; 

constructor(nombre:string, apellido:string, edad:number){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

public getNombre():string{
    return this.nombre;
}
public getApellido():string{
    return this.apellido;
}
public getEdad():number{
    return this.edad;
}
public setNombre(nombre:string):void{
    this.nombre = nombre;
}
public setApellido(apellido:string):void{
    this.apellido = apellido;
}
public setEdad(edad:number):void{
    this.edad = edad;
}

public getAlumno():string{
    return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`;
}
}