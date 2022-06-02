// let memoria = '16RAM';
// let pantalla = 7;
// let almacenamiento = '128GB';
// let camara = true;
// let SO = 'Android';

// notación literal para crear un objeto
let usuarioFrancisco = {
    // propiedad: valor, 
    nombreUsuario: 'fran', 
    password: 'A$34576sdf',
    nombre: 'Francisco',
    apellido: 'Andrade',
    correo: 'fran@gmail.com',
    estado: true,
    //metods o funciones
    cambiarPassword: () =>{
        document.write('Nuevo password');
    }
}

// mostrar objeto
document.write(usuarioFrancisco);
console.log(usuarioFrancisco);

// mostrar propiedades de un objeto (forma 1)
document.write(`<br>Nombre de usuario: ${usuarioFrancisco.nombreUsuario}`);
// mostrar propiedades de un objeto (forma 2)
document.write(`<br>Correo: ${usuarioFrancisco['correo']}`);

// modificar una propiedad del objeto
usuarioFrancisco.estado = false;
document.write(`<br>Nombre de usuario: ${usuarioFrancisco.estado}`);

// agregamos una nueva propiedad al objeto
usuarioFrancisco.direccion = 'Tucuman';
document.write(`<br>Direccion: ${usuarioFrancisco.direccion}`);

// invocar a un metodo del objeto
usuarioFrancisco.cambiarPassword();

// crear un bucle que muestre todo el objeto
let claves = Object.keys(usuarioFrancisco); // ['nombreUsuario', 'nombre', '...','cambiarPassword'] Object.keys convierte a la variable en un array (recorriendo sus datos).
console.log(claves)

// crear un bucle que muestre todo el objeto
 for(let indice = 0; indice < claves.length; indice ++){
     document.write(`<br>${claves[indice]}: ${usuarioFrancisco[claves[indice]]}`)
 }
                  






