/*
JS maneja variables del siguiente modo:

var -> es una variable de acceso local de la cual cualquiera puede hacer uso

let -> es una variable "protegida", pues solo se puede usar dentro de una función, es como si fuera una variable local, mas no global

const -> es una constante, sognifica que su valor no puede cambiar
*/

/*
var x = "Hola";
if(true){
    let x = "había una vez";
    console.log(x);
}

//console.log es la consola que podemos usar
//todo lo que ocurra dentro de la función es independiente del resto del código, por eso el texto se queda como "había una vez"
//no puedes tener dos variables con el mismo nombre, a menos que tengas una dentro de la función y otra fuera de la función, ahí sí está permitido

function suma(n1, n2){
    return n1+n2;
}

console.log(`Esta es la suma: ${suma(4,5)}`);   //forma general de la función

//FUNCIONES FLECHA: las funciones flecha nos ayudan a poder realizar operaciones de una forma más sencilla y su estructura es la siguiente:
//"cadena" -> id, clase, nombre, atributo

const sumaFlecha = (n1, n2) => n1+n2;
console.log(`Esta es la suma: ${sumaFlecha(3,5)}`);
*/

const razasPerros = [
    "Gran Danés",
    "Pastor Alemán",
    "Chihuahua",
    "Bethoven",
    "Belgua",
    "Dálmata",
    "Pitbull",
    "San Bernardo"
];
/*
// queremos recorrerlo e imprimirlo
for(let i=0; i<razasPerros.length; i++){
    console.log(razasPerros[i]);
}

//for 2
//acá es si no me importa nada de la posición ni requiero ninguno en específico, solo quiero todos los datos
for(const raza of razasPerros){
    console.log(raza);
}


//esto es si solo ocupo un dato en específico
for(const indice in razasPerros){
    console.log(razasPerros[indice]);
}


for(const indice in razasPerros){
    console.log(razasPerros);       //si no mandas el índice, no contará la cantidad de elementos dentro del arreglo, sin el índice imprime todo el arreglo al no saber a cuál posición hacerle caso
}


//forEach itera sobre los elementos del arreglo y no devuelve nada, ES COMPATIBLE CON CADENAS Y OBJETOS
//todos los forEach son funciones flecha por defecto

razasPerros.forEach((raza) => console.log(raza));
//Estructura general forEach:
// argumento.forEach((raza, índice, arregloOriginal)=>lo que quiero que haga)


//Funcion MAP: itera sobre los elementos del arreglo y regresa un arreglo diferente con el cual podemos jugar
const razasPerrosMAYUSCULAS=razasPerros.map((raza)=>console.log(raza.toUpperCase()));

//FIND: nos permite realizar la búsqueda de un elemento dentro del arreglo, si lo encuentra, lo retorna, sino lanza un "undefined"
//e.g. buscar si existe la raza "San Bernardo"
if(razasPerros.find((raza)=>raza === "San Bernardo")){      //=== si y solo si, compara el dato y el tipo
    console.log("La raza se encuentra dentro del arreglo.")
    console.log(razasPerros);
}
else{
    //mete el dato
    razasPerros.push("San Bernardo");      //lo añade hasta el final
    console.log(razasPerros);
}
*/

//FINDINDEX: es muy similar al anterior; pero en lugar de regrear el elemento, regresa su índice
//si no lo encuentra, regresa un -1. Esta función es particularmente útil en elementos que neces
//itamos modicar de un arreglo original dentro de una copia.
const indiceSanBernardo=razasPerros.findIndex((raza)=>raza==="San Bernardo");
if(indiceSanBernardo>-1){
    //el resultado sí está en el arreglo
    console.log(razasPerros[indiceSanBernardo]);
    razasPerros[indiceSanBernardo]+="( Es una raza de perros grande)"
    console.log(razasPerros[indiceSanBernardo]);
    console.log(razasPerros);
}

//examen:
//opción 1: soudoku 6 tableros
//opción 2: gato de gatos
//opción 3: scrabble
//opción 4: piedra, papel, tijera, lagarto, spock
//opción 5: smash
//opción 6: combinación de 3 juegos
//TODO EN GIT FUNCIONANDO
//EL REPOSITORIO NO VA A SER PÚBLICO, VA A SER PRIVADO Y SE MUESTRA EN CLASE