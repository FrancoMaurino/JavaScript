'use strict'

/* 1- pida 6 numeros por pantalla y los meta en un array
2- tiene que mostrar el array entero en el cuerpo de la pag y en la consola
3- ordenarlo y mostrarlo
4- invertir su orden y mostrarlo
5- mostrar cuantos elementos tiene el array
6- busqueda de un valor introducido por el usuario, y que nos diga si esta 
y su posicion */

//function para mostrar en el cuerpo de la pagina
function mostrarArray (elementos,textoCustom=""){
//mostrar en el cuerpo de la pagina
    document.write("<h1>Contenido del Array"+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<strong>"+elemento+"</strong><br/>");
    });
    document.write("</ul>");
};

//pedir 6 numeros
var numeros = new Array();
for(var i=0; i<=5; i++){
    //numeros[i]= parseInt(prompt("Introduce un numero",0));
    numeros.push(parseInt(prompt("Introduce un numero",0)));//otra forma de hacer lo mismo, con push
};

//mostrar el array por la consola
console.log(numeros);

//ordenar y mostrar en el cuerpo de la pagina
numeros.sort(function(a, b){return a - b});
mostrarArray(numeros," ordenado");

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros," revertido");

//contar elementos 
document.write("<h1> El array tiene: "+numeros.length+" elementos</h1>");

//busqueda
var busqueda = parseInt(prompt("Busca un numero",0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion != -1) {
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion +"</h1><hr/>");
} else {
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}

