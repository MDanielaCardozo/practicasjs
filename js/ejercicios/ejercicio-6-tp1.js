/* 6.- Escribe un programa que pida dos números
  y escriba en la pantalla cual es el mayor.*/

  let numero1 = parseInt (prompt ('Escriba un número'));
  numero2 = parseInt (prompt ('Escriba un segundo número'));

  if (numero1 > numero2){
      document.write("El primer número ingresado "+numero1+" es mayor al segundo número ingresado "+numero2)
  } else if (numero1 === numero2) {
      document.write('Los numeros son iguales')
  } else {
            document.write("El segundo número ingresado "+numero2+"es mayor al primer número ingresado "+numero1)
        }
