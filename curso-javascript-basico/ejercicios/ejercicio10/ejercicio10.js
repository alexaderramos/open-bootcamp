class Estudiante {
    nombre = "Alexander";

    lista = ["Javascript", "HTML", "CSS"];



    obtenDatos() {
        return {
            nombre: this.nombre,
            lista: this.lista
        }
    }


}

let estudiante = new Estudiante();

console.log('====================================');
console.log(estudiante.obtenDatos());
console.log('====================================');