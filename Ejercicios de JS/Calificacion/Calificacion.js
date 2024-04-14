function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function comision(){
    var califI=parseFloat(formulario.calif1.value);
    var califII=parseFloat(formulario.calif2.value);
    var califIII=parseFloat(formulario.calif3.value);
    var parciales=califI+califII+califIII;
    var par=parciales/3*0.55;
    var examen=parseFloat(formulario.exameni.value);
    var trabajo=parseFloat(formulario.trabajoi.value);
    var total=par+examen*0.3+trabajo*0.15;

    alert("Su Calificacion final es "+total);
}
function borrar(){
    document.all.value="";
}