let fechaHoy = new Date();

let fechaCumple = new Date(1990, 11, 25);

let esTardeFechaNacimiento = fechaHoy.getTime() > fechaCumple.getTime();

let diaNacimiento = fechaCumple.getDay();

let mesNacimiento = fechaCumple.getMonth() + 1;

let anioNacimiento = fechaCumple.getFullYear();

