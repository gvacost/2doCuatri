    import { Profesor } from "./prof";
    import { Alumno } from "./Alumno";
    import { Escuela } from "./escuela";

    const profesor = new Escuela('Historia');

    const alumno1 = new Alumno('Gonzalo', 'Acosta',28);
    const alumno2 = new Alumno('Ornella','Minotti', 29);

    const materia = new Profesor('Juan' ,'Perez');

    profesor.ingresoMatricula(alumno1);
    profesor.ingresoMatricula(alumno2);

    console.log('Profesor: '+profesor.mostrarProfesor()+' '+profesor.getMateria() +'\nAlumnos: '+'\n'+materia.mostrarAlumno())


