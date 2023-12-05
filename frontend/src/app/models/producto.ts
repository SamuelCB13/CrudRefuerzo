export class Producto {

    _id?: number;
    servicio: string;
    cantidad: number;
    concepto: string;
    centro_costos: string;

    constructor(servicio: string, cantidad: number, concepto: string, centro_costos: string) {
        this.servicio = servicio;
        this.cantidad = cantidad;
        this.concepto = concepto;
        this.centro_costos = centro_costos;
    }

}