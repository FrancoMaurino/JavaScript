'use strict'

//array multidimensional
var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Sueños de fuga", "Gran Torino", "Spider man"];

var cine = [categorias, peliculas];
/* console.log(cine[0][1]);
console.log(cine[1][1]);
 */


do {
    var elemento  = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
} while (elemento != "terminar" );

peliculas.pop();//elimina el ultimo elemento del array
console.log(peliculas);

//borrar un campo
var indice = peliculas.indexOf("Gran Torino");
if (indice > -1) {
    peliculas.splice(indice,1);
}
console.log(peliculas);

//convertir un array a un string
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//transformar cadena a array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(",");
console.log(cadena_array);

//ordenar array
peliculas.sort();//por orden alfabetico
peliculas.reverse();//orden inverso al que tenia


//otra manera de recorrerlo
for(let categoria in categorias){
    document.write("<li>"+categorias[categoria]+"</li>");
}

