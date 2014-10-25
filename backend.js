// variable global de todo el backend, codigo secreto, backgend intermediario de lo datos no se puede ver
var hola= "un saludo";
var basedatos={
	usuario: "claudio",
	password: "superpass"
};

// curso profesional de backend python django, y nodejs


console.log("Arrancando server de node");

var express = require("express");
var parcero = require("body-parser"); // parsea formulario a javascript

// crear aplicacion web
var web = express(); // forma de utilizar la libreria
web.use(parcero.urlencoded({extended:true}));

// los cambios no se ven hasta que reinicie el servidor
// se pueden tener variables en el backend que se pueden usar en todo el codigo
// necesito un servidor corriendo
// se arranca, arrancando la web
// www.guiadeemprendimiento.com
// puerto 80, solo lo pueden abrir  los administradores, sudo 
// por defecto corre el puerto 80

var servidor;
// puerto abajos del 256, solo adminstrador
servidor = web.listen(8080, function(){

console.log("Servidor arrancado, empieza a escuchar en puerto 8080");

} );

web.get("/", function(req, res){

		res.sendfile("formulario.html");

});

web.post("/entrar", function(req, res){

		//console.log(req.body);
		// siempre hay que enviar una respuesta, probar enviando un jpg
		// instalar body-parser
		// npm install body-parser, no se instala global!!!
		// permite analizar envios de post
		// instalar local sin sudo en la carpeta del proyecto
		// libreria externa a express
		//res.send("entraste al formulario"+ req.body.usuario);
		if(req.body.usuario == basedatos.usuario && req.body.clave == basedatos.password){
			res.send("Bienvenido lo lograste ;)");
		}else{
			res.send("Sale de acá, oe");
		}
 
});

//recuperando variables get desde el navegador
web.get("/test/hola-mundo", function(req, res){
		//muestra todas variables req.query
		//console.log(req);
		//console.log("tu avión es el " + req.query.avion + " y el humano se llama " + req.query.humano);
		res.send("tu avión es el " + req.query.avion + " y el humano se llama " + req.query.humano);
		res.send("enruta a test");
});

