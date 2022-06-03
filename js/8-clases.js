// Crear una clase

class Usuario{
    // primero creamos un metodo constructor
    constructor(nombreUsuarioParam, nombreParam, apellidoParam, correoParam, passwordParam, direccionParam){
        this.nombreUsuario = nombreUsuarioParam;
        this.password = passwordParam;
        this.nombre =  nombreParam;
        this.apellido = apellidoParam;
        this.correo = correoParam;
        this.direccion = direccionParam;
    }
    // definir los metodos
    cambiarPassword(){
        document.write('<br>Cambiando el password...')
    }

    mostrarDatos(){
        document.write(`<br>
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Apellido: ${this.apellido}</li>
        <li>Correo: ${this.correo}</li>
        <li>Direccion: ${this.direccion}</li>
        <li>Nombre usuario: ${this.nombreUsuario}</li>
        </ul>
        `)
    }
}

// como crear un objeto o instancia
let userValentina = new Usuario('ValeOrmarchea', 'Valentina', 'Ormaechea', 'valeOrmaechea@gmail.com', '123456', '-');
let userJuan = new Usuario('Juan menicheti', 'juan', 'menicheti', 'juanMenicheti@gmail.com', '1234556', '-')

console.log(userValentina);

userValentina.mostrarDatos();
userJuan.mostrarDatos();