// vamos a crear un arreglo que cotenga todas las instrucciones para el juego

var instrucciones = [
    "Utiliza las flechas de navegación para mover las piezs,",
    "para ordenar las piezas, guíate por la imagen objetivo."
];

//vamos a crear una variable para guardar el último movimiento

var movimientos = [];

//vamos a crear una matriz que represente las posiciones del rompecabezas

var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


var rompeCorrecta = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//lo que se mueve del rompecabezas es una coordenada fila vs columna, so necesito una variable para guardar la posición de la pieza que se mueve (9)

var filaVacia = 2;
var columnaVacia = 2;

//ya que definí qué necesito, ahora hay que empezar a estructurar las funciones

//la primera función que debe de estar en uso es la de instrucciones. Debe de recorrer el arreglo de las instrucciones e imprimirlo en html

function mostrarInstrucciones(instrucciones){
    for(var i=0; i < instrucciones.length; i++){
        //debo mostrarlo en la lista
        mostrarInstruccionLista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarInstruccionLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    //debo agregar la etiqueta li
    var li = document.createElement("li");
    //para agregarlo usamos textContent
    li.textContent = instruccion;
    ul.appendChild(li);
}

//vamos a crear una función para agregar la última dirección del movimiento
function agregarUltimoMovimiento(direccion){
    movimientos.push(direccion);
}

function checharSiGano(){
    for(var i=0; i < rompe.length; i++){
        for(var j=0; j < rompe[i].length; j++){
            var rompeAcutal = rompe[i][j];
            if(rompeAcutal !== rompeCorrecta[i][j]){
                return false;
            }
        }
    }
    return true;
}

//si realmente gané debo mostrarlo en el html
function mostrarCartelGanador(){
    if(checharSiGano()){
        alert("A mimir owo.");
    }
    return false;
}

//necesito una función para poder intercambiar la posición vacía vs alguna otra
//e.g. arreglo[1][2]=arreglo[0][0]
//cuando lo intercambio ->
//arreglo[0][0] = arreglo[1][2]

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];
    //ahora intercambio
    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;
}

//siempre debo saber donde está la pieza vacía
function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//tenemos que checar si la posición dentro de rompecabezas es la correcta
function posicionValida(fila, columna){
    return (fila >= 0 && fila <= 2 && columna >=0 && columna <=2);
}

//ahora viene la parte del movimiento, para ello debemos entender que cada pieza es un hueco dentro de la matriz, y solo están cambiando las posiciones de la matriz, por lo que cuando yo teclee las flechas de navegación debo saber cuál presionó
// arriba 38 abajo 40 izquierda 37 derecha 39

function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    //se mueve?
    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia= filaVacia+1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia-1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia+1;
    }else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia-1;
    }
    //mandar llamar aq la posición sea válida, y si no, intercambiara
    if(posicionValida(nuevaFilaPiezaVacia,nuevaColumnaPiezaVacia)){
        //tengo que hacer una función que se encargue de intercambiar las posiciones
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //agrega el último movimiento
        agregarUltimoMovimiento(direccion);
    }
}

var codigosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];
    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);

    //debo crear otra función para mostrar el cambio visualmente
    intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

function intercambiarPosicionesDOM(idpieza1, idpieza2){
    var elementoPieza1 = document.getElementById(idpieza1);

    var elementoPieza2 = document.getElementById(idpieza2);
    //vamos a crear clon y puedo ocultar
    var padre = elementoPieza1.parentNode;
    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);
    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);
}

//necesitamos saber la actualizacion de los movimientos 

function actualizarUltimoMovimiento(direccion){
    var ultimoMov = document.getElementById('flecha');

    switch(direccion){
        case codigosDireccion.ARRIBA:
        ultimoMov.textContent = '↑';
        break;
        
        case codigosDireccion.ABAJO:
        ultimoMov.textContent = '↓';
        break;

        case codigosDireccion.IZQUIERDA:
        ultimoMov.textContent = '←';
        break;

        case codigosDireccion.DERECHA:
        ultimoMov.textContent = '→';
        break;
    }
}

//necesitamos mezclar el rompecabezas un numero de veces

function mezclarPiezas(veces){
    if(veces <= 0){
        alert("asi no se puede :(");
        return;
    }
    
var direcciones = [codigosDireccion.ARRIBA, codigosDireccion.ABAJO, codigosDireccion.IZQUIERDA, codigosDireccion.DERECHA];
//revolvemos
var direccion = direcciones[Math.floor (Math.random()*direcciones.length)];
moverEnDireccion(direccion);

setTimeout(function(){
    mezclarPiezas(veces-1);
}, 100);
}

//necesitamos saber que teclas esta oprimiendo el jugador

function capturarTeclas(){
    //para saber que teclas esta oprimiendo, ocupamos onkeydown
    document.body.onkeydown = (function (evento){
        if(evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.IZQUIERDA || evento.which === codigosDireccion.DERECHA){
            moverEnDireccion(evento.which);
            actualizarUltimoMovimiento
            (evento.which);
            //tengo que saber si gane
            var gano = checharSiGano();
            if(gano){
                setTimeout(function(){
                    mostrarCartelGanador();
                }, 500);
            }
            evento.preventDefault;
        }
    })
}

//ahora para iniciar el rompecabezas en si

function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}

//falta ejecutarlo

iniciar();

//mando a llamar las instrucciones
mostrarInstrucciones(instrucciones);


