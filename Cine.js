"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
const Sala_1 = require("./Sala"); // Importa la clase Sala desde el archivo 'Sala.js'.
class Cine {
    constructor() {
        this.salas = []; // Inicializa un arreglo de salas vacío.
    } // Constructor privado.
    static getInstance() {
        if (!Cine.instance) {
            Cine.instance = new Cine(); // Crea una instancia de la clase Cine si no existe una instancia previa.
        }
        return Cine.instance; // Devuelve la instancia existente de la clase Cine.
    }
    crearSala(numero, capacidad, pelicula, asientosDisponibles) {
        const sala = new Sala_1.Sala(numero, capacidad, pelicula, asientosDisponibles); // Crea una instancia de la clase Sala con los parámetros proporcionados.
        this.salas.push(sala); // Agrega la sala creada al arreglo de salas del cine.
        return sala; // Devuelve la sala recién creada.
    }
}
exports.Cine = Cine;
