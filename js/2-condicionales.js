let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

/* if (condicion logica) {
    entonces hago lo que esta en estas llaves
} else {
    codigo que realizo cuando no se cumple la condicion
}
*/

if (numero1 > numero2) {
  document.write("El numero mayor es el numero 1: " + numero1);
} else if (numero1 === numero2) {
  document.write("Los numeros ingresados son iguales " + numero1);
} else {
  document.write("El numero 2 es mayor, numero 2: " + numero2);
}

/*
if (numero1 > numero2) {
  document.write("El numero mayor es el numero 1: " + numero1);
else
   document.write("Los numeros ingresados son iguales " + numero1);
*/
