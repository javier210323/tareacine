"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sala = void 0;
class Sala {
    constructor(numero, capacidad, pelicula, asientosDisponibles) {
        this.numero = numero;
        this.capacidad = capacidad;
        this.pelicula = pelicula;
        this.asientosDisponibles = asientosDisponibles;
    }
    getAperitivos() {
        // Implementación de obtener aperitivos gratuitos de la sala
        // ...
        return ['Canguil', 'Refresco'];
    }
    getAsientosDisponibles() {
        return this.asientosDisponibles;
    }
}
exports.Sala = Sala;
