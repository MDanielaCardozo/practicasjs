/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar
 un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

 let edad = parseInt(prompt('Ingrese su edad'))

 if (edad >= 18) {
     document.write('Ya puedes conducir')
 } else if ( edad <= 0) {
     document.write('No es numero valido')
 } else {
     document.write('No puede conducir hasta cumplir los 18 años')
 }