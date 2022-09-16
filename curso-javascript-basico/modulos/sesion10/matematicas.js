// funciones de las operaciones elementales
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

// potencia
function potencia(a, b) {
    return a ** b;
}

// raiz cuadrada
function raizCuadrada(a) {
    return Math.sqrt(a);
}


module.exports = {
    suma,
    multiplicacion,
    division,
    resta,
    potencia,
    raizCuadrada
}