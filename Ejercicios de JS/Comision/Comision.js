function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function comision(){
    var ventaI=parseFloat(formulario.cantidad1.value);
    var ventaII=parseFloat(formulario.cantidad2.value);
    var ventaIII=parseFloat(formulario.cantidad3.value);
    var sueldo=parseFloat(formulario.sueldoi.value);
    var ventas=ventaI+ventaII+ventaIII;
    var comision=ventas*0.1;
    var sb=comision+sueldo;


    document.getElementById("sbi").value = sb + "$";
    document.getElementById("comisioni").value = comision + "$";
}
function borrar(){
    document.all.value="";
}