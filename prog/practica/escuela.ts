import { Alumno } from "./Alumno";
import { Profesor } from "./prof";

export class Escuela{
    //Deberia crear las variables respectivas para que los metodos me dejen agregar/sacar alumnos y/o profesores
    //Si el profesor es contratado, paso la class Escuela a Profesor, y los alumnos que se carguen los paso a Escuela, 
    //si escuela los matricula, los paso con el profesor correspondiente. 
    private alumno: Alumno; 
    private profNombre : string;
    private materia : string; 
    private listadoProfe :Profesor[];
    private ListadoAlumnos:Alumno[];

    constructor( materiaProf:string){
        this.listadoProfe = [];
        this.ListadoAlumnos = [];
    }

    public ingresoMatricula(alumnoNew:Alumno):void{
        if(alumnoNew.getEdad()<30){
            this.ListadoAlumnos.push(alumnoNew);
        }
        else{
            console.log('El aspirante supera el limite de edad de la escuela')
        }
    }
    public expulsarAlumno(alumno:Alumno):void{
        this.ListadoAlumnos.filter(alumno => alumno !== alumno)
    }
    public mostrarAlumno():string{
        let listadoFinal = '';
        this.ListadoAlumnos.forEach(alumno => {
            listadoFinal += alumno.getAlumno()+'\n'
        });
        return listadoFinal.trim();
    }
    // public getNombreProf ():string{
    //     return this.profNombre;
    // }
    // public setNombreProf(nomyApell:string):void{
    //     this.profNombre = nomyApell;
    // }

    public agregarProfesor(profesor: Profesor): void {
        this.listadoProfe.push(profesor); 
    }
    public mostrarProfesor():string{
        let listaProfes = '';
        this.listadoProfe.forEach(profe => {
            listaProfes += profe.getProfesor()+'\n'
        });
        return listaProfes.trim();
    }

    public getMateria():string{
        return this.materia;
    }
    public setMateria(materiaProf:string):void{
        this.materia = materiaProf;
    }

}