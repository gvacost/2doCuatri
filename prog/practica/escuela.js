"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(materiaProf) {
        this.listadoProfe = [];
        this.ListadoAlumnos = [];
    }
    Escuela.prototype.ingresoMatricula = function (alumnoNew) {
        if (alumnoNew.getEdad() < 30) {
            this.ListadoAlumnos.push(alumnoNew);
        }
        else {
            console.log('El aspirante supera el limite de edad de la escuela');
        }
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        this.ListadoAlumnos.filter(function (alumno) { return alumno !== alumno; });
    };
    Escuela.prototype.mostrarAlumno = function () {
        var listadoFinal = '';
        this.ListadoAlumnos.forEach(function (alumno) {
            listadoFinal += alumno.getAlumno() + '\n';
        });
        return listadoFinal.trim();
    };
    // public getNombreProf ():string{
    //     return this.profNombre;
    // }
    // public setNombreProf(nomyApell:string):void{
    //     this.profNombre = nomyApell;
    // }
    Escuela.prototype.agregarProfesor = function (profesor) {
        this.listadoProfe.push(profesor);
    };
    Escuela.prototype.mostrarProfesor = function () {
        var listaProfes = '';
        this.listadoProfe.forEach(function (profe) {
            listaProfes += profe.getProfesor() + '\n';
        });
        return listaProfes.trim();
    };
    Escuela.prototype.getMateria = function () {
        return this.materia;
    };
    Escuela.prototype.setMateria = function (materiaProf) {
        this.materia = materiaProf;
    };
    return Escuela;
}());
exports.Escuela = Escuela;
