let numero1 = parseInt(prompt("Ingrese un numero aqui"));
console.log(numero1);
// el prompt por defecto toma lo que escriba el usuario como una cadena de caracteres
// para evitar esto
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
// operadores condicionales
if(numero1 > numero2)
{
    document.write("El primer numero es mayor");
}
// if( parseInt(numero2) > numero1 )
// {
//     document.write("El segundo numero es mayor")
// }
// if( parseInt(numero2) == numero1 )
// {
//     document.write("Ambos son iguales")
// }
else if(numero1 == parseInt(numero2))
{
    document.write("Ambos son iguales");
}
else{
    document.write("Ël segundo numero es mayor");
}
