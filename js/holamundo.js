// este mje solo se muestra en la consola del navegador al inspeccionar
console.log("Hola mundo!:)");
// este lo puede ver el usuario como un modal
// alert("Hola Usuario! :)");
// este mje se imprime dentro del body del sitio
document.write("Hola mundo! Hola Usuario! :D ");

// declaracion de variable, usaremos let en lugar de var  nose pq
let nombre = "Delfina";

document.write("Hola " + nombre)

// declaracion de variables, let var y const
var edad = 32; 
let age = 29;
//  var ya no  se utiliza, var y let se pueden usar a lo largo de todo el archivo y se puedden cambiar, la dif entre ellas la vemos despues
document.write("<br> Variables Var y Let");
document.write("<br>Edad="+ edad);
document.write("<br>Edad="+ age);

edad = 25;
age = 30;
document.write("<br> Variables Var y Let con su valor modificado");
document.write("<br>Edad="+ edad);
document.write("<br>Age="+ age);
// const es una constante, no  puede variar
const url = "https//:google.com";
document.write("<br>URL= "+url);

// operadores unitarios
let contador = 1;
document.write("<br> Contador="+contador);
contador++;
document.write("<br> Contador="+contador);




