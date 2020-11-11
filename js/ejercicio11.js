let numero = parseInt(prompt("Ingrese un numero aqui"));
if(numero % 2 == 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0)
{
    document.write("El numero solo es divisible por 2");
}
else if(numero % 2 == 0 && numero % 3 == 0 && numero % 5 != 0 && numero % 7 != 0)
{
    document.write("el numero es divisible por 2 y 3");
}
else if(numero % 2 == 0 && numero % 3 != 0 && numero % 5 == 0 && numero % 7 != 0)
{
    document.write("el numero es divisible por 2 y 5");
}
else if(numero % 2 == 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 == 0)
{
    document.write("el numero es divisible por 2 y 7");
}
else if(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 != 0)
{
    document.write("el numero es divisible por 2, 3 y 5");
}
else if(numero % 2 == 0 && numero % 3 != 0 && numero % 5 == 0 && numero % 7 == 0)
{
    document.write("el numero es divisible por 2, 5 y 7");
}
else if(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0)
{
    document.write("el numero es divisible por 2 , 3, 5, y 7 ????");
}
else if(numero % 2 != 0 && numero % 3 == 0 && numero % 5 != 0 && numero % 7 != 0)
{
    document.write("el numero es divisible por 3");
}
else if(numero % 2 != 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 != 0)
{
    document.write("el numero es divisible por 3 y por 5");
}
else if(numero % 2 != 0 && numero % 3 == 0 && numero % 5 != 0 && numero % 7 == 0)
{
    document.write("el numero es divisible por 3 y por 7");
}
else if(numero % 2 != 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0)
{
    document.write("el numero es divisible por 3, 5, y 7");
}
else if(numero % 2 != 0 && numero % 3 != 0 && numero % 5 == 0 && numero % 7 != 0)
{
    document.write("el numero es divisible por 5");
}
else if(numero % 2 != 0 && numero % 3 != 0 && numero % 5 == 0 && numero % 7 == 0)
{
    document.write("el numero  es divisible por 5 y por 7");
}
else if(numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 == 0)
{
    document.write("el numero es divisible por 7");
}
else{
    document.write("no es un numero valido, o felicidades, encontro un numero que no es divisible por 2, ni 3, ni 5 ni 7")
}