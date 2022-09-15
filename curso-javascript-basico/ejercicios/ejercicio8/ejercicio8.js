function siempreTrue(){
    return true;
}

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function promesa(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hola soy una promesa");
        }, 5000);
    });
}

//Una función generadora de índices pares automáticos
function* pares(){
    let i = 0;
    while(true){
        yield i;
        i += 2;
    }
}