/* 1- Escribe un programa de una
sola linea que haga que aparezca en 
la pantalla un alert que diga "un mensaje"*/

alert ('Bienvenido')

/* 2.- Escribe un programa de una sola 
línea que escriba en la pantalla un texto 
que diga «Hello World» (document.write).*/

document.write ('Hello World <br>')

/*3.- Escribe un programa de una sola línea 
que escriba en la pantalla el resultado de sumar 3 + 5.*/

document.write (3+5)

/*4.- Escribe un programa de dos líneas 
que pida el nombre del usuario con un prompt
 y escriba un texto que diga «Hola nombreUsuario»*/

 let nombre = prompt ('Escriba su nombre')

 alert ('Hola '+ nombre)

 /* 6.- Escribe un programa que pida dos números
  y escriba en la pantalla cual es el mayor.*/

  let numero1 = parseInt (prompt ('Escriba un número'))
  numero2 = parseInt (prompt ('Escriba un segundo número'))

  if (numero1 > numero2)
  {
      document.write("El primer número ingresado "+numero1+" es mayor al segundo número ingresado "+numero2)
  } else 
        {
            document.write("El segundo número ingresado "+numero2+"es mayor al primer número ingresado "+numero1)
        }


        









