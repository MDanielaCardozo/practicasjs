/*11.- Añadir al ejercicio anterior que nos diga por cuál 
de los cuatro es divisible (hay que decir todos por los que es divisible)*/

let numero = parseInt(prompt('Ingrese un numero'));

if (numero % 2 === 0) {
    document.write('El numero ingresado es divisible por 2<br>')
}
if (numero % 3 === 0) {
    document.write('El numero ingresado es divisible por 3<br>')
}
if (numero % 5 === 0) {
    document.write('El numero ingresado es divisible por 5<br>')
}
if (numero % 7 === 0) {
    document.write('El numero ingresado es divisible por 7<br>')
} 
if (numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0) {
    document.write('El numero ingresado no es divisible por 2, 3, 5 y 7')
}
