// Crear una clase


// comision, notas, legajo, estado, asistencia.

// comision, antiguedad, horarios: part-time, full-time, tipo de contrato.

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

    //propiedades conmutadas get y set
    get mostrarNombreUsuario(){
        return this.nombreUsuario;
    }

    get mostrarDireccion(){
        return this.direccion;
    }

    //setter (siempre con parametros)
    set modificarDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }

    }

// clase alumno que hereda de usuario
class Alumno extends Usuario{
    // primer metodo 
    constructor(comision, legajo, estado, nombre, apellido, nombreUsuario, password, email, direccion){
    // invocar al constructor de la clase usuario (super palabra reservada)
    super(nombreUsuario, nombre, apellido, email, password, direccion); 
    this.comision = comision;
    this.legajo = legajo;
    this.estado = estado;
    }
}


// como crear un objeto o instancia
let userValentina = new Usuario('ValeOrmarchea', 'Valentina', 'Ormaechea', 'valeOrmaechea@gmail.com', '123456', '-');
let userJuan = new Usuario('Juan menicheti', 'juan', 'menicheti', 'juanMenicheti@gmail.com', '1234556', '-')

console.log(userValentina);

userValentina.mostrarDatos();
userJuan.mostrarDatos();

document.write(`El nombre del usuario es ${userValentina.mostrarNombreUsuario}`);
document.write(`<br>El nombre del usuario es ${userJuan.mostrarNombreUsuario} es ${userJuan.mostrarDireccion}`);

userJuan.modificarDireccion = 'Tucuman';
document.write(`<br>El nombre del usuario es ${userJuan.mostrarNombreUsuario} es ${userJuan.mostrarDireccion}`);





