'use strict'

//transformacion de textos
var num=444;
var texto1= " Curso JavaScript curso ";
var texto2= "Hola";

var dato =num.toString();
    dato= texto1.toUpperCase();
    dato= texto2.toLowerCase();
console.log(dato);

//calcular longitud
var nombre ="franco cantidad letras";
console.log(nombre.length);

//concatenar 
//var textoTotal = texto1+" "+texto2;
var textoTotal = texto1.concat(" "+ texto2);
console.log(textoTotal);

//BUSCAR TEXTO
var busqueda= texto1.indexOf("curso");//primera aparicion
console.log(busqueda);
var busqueda= texto1.lastIndexOf("curso");//ultima aparicion
console.log(busqueda);
var busqueda= texto1.search("curso");//primera aparicion
console.log(busqueda);
var busqueda= texto1.match("curso");//devuelve un array de los resultados(primera coincidencia)
console.log(busqueda);

//substring
var busqueda= texto1.substring(0,5);
console.log(busqueda);

//sacar una letra unicamente
var busqueda= texto1.charAt(10);
console.log(busqueda);

//booleano busca una cadena 
var busqueda = texto1.startsWith("Curso");
console.log(busqueda);

//booleano si incluye el string
var busqueda = texto1.includes("JavaScript");
console.log(busqueda);

//reemplazar texto
var busqueda = texto1.replace("JavaScript", "js")
console.log(busqueda);

//recortar un string
var busqueda = texto1.slice(5,10)
console.log(busqueda);

//meter texto en un array
var busqueda = texto1.split(" ")
console.log(busqueda);

//sacar espacios por delante y por detras
var busqueda = texto1.trim()
console.log(busqueda);



