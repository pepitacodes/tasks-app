export class Task {
    nombre: string;
    estado: boolean;

    constructor(nombre: string, estado: boolean) {
        this.nombre = nombre;
        this.estado = estado;
    }
}