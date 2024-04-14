function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function porcentaje(){
    var hombres=parseFloat(formulario.hombresi.value);
    var mujeres=parseFloat(formulario.mujeresi.value);
    var total=hombres+mujeres;
    var phombres=hombres/total*100;
    var pmujeres=mujeres/total*100;


    document.getElementById("totali").value = total;
    document.getElementById("porhi").value = phombres+"%";
    document.getElementById("pormi").value = pmujeres+"%";
}
function borrar(){
    document.all.value="";
}