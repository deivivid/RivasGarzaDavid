function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function edadf(){
    var año1=parseFloat(formulario.añoni.value);
    var año2=parseFloat(formulario.añoai.value);
    edadv=año2-año1;

    document.getElementById("edadi").value = edadv;
}
function borrar(){
    document.all.value="";
}