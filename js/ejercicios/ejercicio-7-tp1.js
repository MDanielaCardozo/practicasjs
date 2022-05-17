// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(prompt('Ingrese un primer numero'));
let numero2 = parseInt(prompt('Ingrese un segundo numero'));
let numero3 = parseInt(prompt('Ingrese un tercer numero'));

if (numero1 > numero2 && numero1 > numero3){
    document.write(numero1)
} else if (numero2 > numero3){
    document.write(numero2)
} else {
    document.write(numero3)
}