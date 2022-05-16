'use strict'

//plantillas de texto

var nombre = prompt("ingrese un nombre");
var apellido = prompt("ingrese un apellido");

//alt96 comillas invertidas
var texto = `
    <h1>Hola</h1>                     
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;

document.write(texto);
