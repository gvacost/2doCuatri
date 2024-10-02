"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.Listado = [];
    }
    Profesor.prototype.getNomProfe = function () {
        return this.nombre;
    };
    Profesor.prototype.setNomProfe = function (nombre) {
        this.nombre = nombre;
    };
    Profesor.prototype.getApProfe = function () {
        return this.apellido;
    };
    Profesor.prototype.setApProfe = function (apellido) {
        this.apellido = apellido;
    };
    Profesor.prototype.agregarAlumno = function (alumno) {
        this.Listado.push(alumno);
    };
    Profesor.prototype.mostrarAlumno = function () {
        var listadoFinal = '';
        this.Listado.forEach(function (alumno) {
            listadoFinal += alumno.getAlumno() + '\n';
        });
        return listadoFinal.trim();
    };
    Profesor.prototype.getProfesor = function () {
        return "Nombre: ".concat(this.nombre, ", Apellido: ").concat(this.apellido);
    };
    return Profesor;
}());
exports.Profesor = Profesor;
