"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nombre, pelicula, sala, numeroAsiento, aperitivos) {
        this.nombre = nombre;
        this.pelicula = pelicula;
        this.sala = sala;
        this.numeroAsiento = numeroAsiento;
        this.aperitivos = aperitivos;
    }
    mostrarDetalle() {
        console.log(`Nombre del cliente: ${this.nombre}`);
        console.log(`Pelicula: ${this.pelicula.getNombre()}`);
        console.log(`Sala: ${this.sala.numero}`);
        console.log(`Número de asiento: ${this.numeroAsiento}`);
        console.log(`Aperitivos: ${this.aperitivos.join(', ')}`);
    }
}
exports.Cliente = Cliente;
