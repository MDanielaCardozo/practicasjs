/* 10.- Escribe un programa que pida un número y nos diga si es 
divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/

let numero = parseInt(prompt('Ingrese un numero'));

if (numero % 2 === 0) {
    document.write('El numero ingresado es divisible por 2');
} else if (numero % 3 === 0) {
    document.write('El numero ingresado es divible por 3');
} else if (numero % 5 === 0) {
    document.write('El numero ingresado es divisible por 5');
} else if (numero % 7 === 0) {
    document.write('El numero ingresado es divible por 7');
} else {
    document.write('El numero ingresado no es divible por 2, 3, 5 y 7');
}
