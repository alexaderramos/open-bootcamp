class Estudiante {
    nombre;

    lista;

    constructor(nombre, lista) {
        this.nombre = nombre;
        this.lista = lista;
    }

    obtenDatos() {
        return `Nombre: ${this.nombre} - Lista: ${this.lista}`;
    }


}

let estudiante = new Estudiante("Juan", "A");

console.log('====================================');
console.log(estudiante.obtenDatos());
console.log('====================================');