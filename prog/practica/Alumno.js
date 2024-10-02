"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.getEdad = function () {
        return this.edad;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Alumno.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Alumno.prototype.getAlumno = function () {
        return "Nombre: ".concat(this.nombre, ", Apellido: ").concat(this.apellido, ", Edad: ").concat(this.edad);
    };
    return Alumno;
}());
exports.Alumno = Alumno;
