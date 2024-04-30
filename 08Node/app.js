// vamos a crear nusetro propio servidor

var http = require('http');

//todo servidor debe de poder atender peticiones y debe de generar respuestas, por lo tanto:
//nuestra funcion debe tener 2 parametros: request y response

var servidor = http.createServer(function(request, response){
    response.writeHead(200, {'x-content-type' : 'text/html; charset=utf-8'});
    response.write('<h2> Hola mundo este es mi primer servidor porfa no me repruebe jimmy </h2>');
    console.log('se hizo una peticion');
    response.end();
});

//en que puerto va a estar funcionando el servidor
servidor.listen(3000);

//ejecutamos en consola
console.log('Ejecutando servidor en puerto 3000');