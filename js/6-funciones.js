//funciones sin parametros
function saludar(){
    //todo el codigo que quiero aislar, reutilizar, repetir, que tenga esta funcion
    document.write('Hola Mundo');
    let prueba = 'test';
}

//invocar o llamar a una funcion
saludar();
saludar();
saludar();

//funcion con parametros ( variable local/parametro, variable local/parametro)
// function saludarPersona(nombreRecibido, apellidoRecibido){
//     document.write(`<br>Hola mi nombre es: ${nombreRecibido} y mi apellido es: ${apellidoRecibido}`);
// }

let saludarPersona = (nombreRecibido, apellidoRecibido) => {
    document.write(`<br>Hola mi nombre es: ${nombreRecibido} y mi apellido es: ${apellidoRecibido}`)
}



//funcion que retorna valor (return ultima linea de codigo)
// function convertirDolaresAPesos(dolares){
//     let pesosFinales = dolares * 210;
//     console.log(pesosFinales)
//     return pesosFinales;
// }


//ES6 arrow functions
const convertirDolaresAPesos = (dolares) =>{
    let pesosFinales = dolares * 210;
       console.log(pesosFinales)
       return pesosFinales;
}

let nombre = prompt('Ingrese un nombre');
let apellido = prompt('Ingrese apellido');
let nombre1 = 'Jony'

//fundamental el orden de las variables dentro de cada parametro
saludarPersona(nombre, apellido);
saludarPersona('Daniela','Cardozo');
saludarPersona(nombre1,'Perez')

let pesosSinImpuestos = convertirDolaresAPesos(60); 
document.write(`<br>Juego en $ ${pesosSinImpuestos}`);
document.write(`<br>Juego en $ ${convertirDolaresAPesos(10)}`);