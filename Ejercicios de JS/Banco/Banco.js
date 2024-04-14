function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
 function ganancia(){
    var ganancia = formulario.capital.value * 2 / 100;
    alert("Usted obtendrá "+ganancia+"$ más despues de un mes");
    }

function borrar(){
    document.getElementById("cantidadi").value = "";
    }