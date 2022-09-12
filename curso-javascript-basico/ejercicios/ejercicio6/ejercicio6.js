let compras = ["leche", "huevos", "pan", "galletas", "queso", "yogur"];
compras.push("Aceite de Girasol");
compras.pop();

let arrayObjetosPeliculas = [
    {
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        fecha: 1972,
    },
    {
        titulo: "El Padrino 2",
        director: "Francis Ford Coppola",
        fecha: 1974,
    },
    {
        titulo: "El Padrino 3",
        director: "Francis Ford Coppola",
        fecha: 1990,
    }
];

let peliculasPosteriores = arrayObjetosPeliculas.filter( (pelicula) =>{
    return pelicula.fecha >= 2010;
});


let directores = arrayObjetosPeliculas.map( (pelicula) =>{        
    return pelicula.director;
});

let titulos = arrayObjetosPeliculas.map( (pelicula) => {
    return pelicula.titulo;
});


let directoresTitulos = directores.concat(titulos);

let directoresTitulos2 = [...directores, ...titulos];

