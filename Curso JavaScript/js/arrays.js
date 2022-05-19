'use strict'
//arrays

var nombres = ["Franco", "Ruben", "Maira", 912, true];

var lenguajes = new Array("PHP","JS","Java");

console.log(nombres);
console.log(lenguajes);

console.log(nombres[2]);//un solo indice

var elemento = parseInt(prompt("que elemento del array quieres?"));

if (elemento >= nombres.length) {
    alert("introduce un numero valido, menor a: "+ nombres.length);
} else {
    alert ("el nombre es: "+nombres[elemento]);
}

document.write("<h1>Lenguajes de programacion</h1>");
for (let index = 0; index < lenguajes.length; index++) {
    document.write("<li>"+lenguajes[index]+"</li>");
    }

    lenguajes.forEach((element) => {
        document.write("<li>"+element+"</li>");
    });

//busquedas
var busqueda = lenguajes.find(lenguaje => lenguaje == "JS")
console.log(busqueda);




