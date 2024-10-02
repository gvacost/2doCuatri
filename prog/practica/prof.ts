  import { Alumno } from "./Alumno";
  import { Escuela } from "./escuela";
  
  export class Profesor{
    private nombre:string;
    private apellido:string;
    private Listado: Alumno[];


    constructor(nombre:string, apellido:string){
        this.nombre= nombre;
        this.apellido = apellido;
        this.Listado = [];
    }

    public getNomProfe():string{
        return this.nombre;
    }

    public setNomProfe(nombre:string):void{
        this.nombre = nombre;
    }
    public getApProfe():string{
        return this.apellido;
    }
    public setApProfe(apellido:string):void{
        this.apellido = apellido;
    }

    public agregarAlumno(alumno:Alumno):void{
        this.Listado.push(alumno);
    }
    public mostrarAlumno():string{
        let listadoFinal = '';
        this.Listado.forEach(alumno => {
            listadoFinal += alumno.getAlumno()+'\n'
        });
        return listadoFinal.trim();
    }

    public getProfesor():string{
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}`;
    }
}