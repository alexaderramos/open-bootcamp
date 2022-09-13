let datosPersonales = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    altura: 1.78,
    eresDesarrollador: true,
}

let edad = datosPersonales.edad;

let misDatos = datosPersonales;
misDatos.amigos = [
    {
        nombre: 'Pedro',
        edad: 30,

    },
    {
        nombre: 'Maria',
        edad: 25,
    },
    {
        nombre: 'Juan',
        edad: 28,
    }
]


misDatos.amigos.sort((a, b) => b.edad - a.edad);

