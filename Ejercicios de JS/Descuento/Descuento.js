function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
 function ganancia(){
    var ganancia = formulario.totali.value - formulario.totali.value * 15 / 100;
    alert("El valor de su compra es "+ganancia+"$.");
    }

function borrar(){
    document.getElementById("totali").value = "";
    }