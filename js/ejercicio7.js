let numero1 = parseInt(prompt("Ingrese un numero aqui"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"))
let numero3 = parseInt(prompt("Ingrese un tercer numero"))
if(numero1 > numero2 && numero1 > numero3)
{
    document.write("El primer numero es mayor")
}
else if(numero2 > numero1 && numero2 > numero3)
{
    document.write("el segundo numero es mayor")
}
else if(numero3 > numero1 && numero3 > numero2)
{
    document.write("el tercer numero es mayor")
}
