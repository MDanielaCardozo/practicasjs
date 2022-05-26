// declarar o crear un arreglo
let usuarios = [];

let series = ['Naruto', 2, 'GOT', 8, 'Rick and Morty', 4,];

document.write(series);
// acceder a un elemento del arreglo
document.write('<br>'+series[0]);
document.write('<br>'+series[4]);
console.log(series.length);

// bucle para mostrar todos los elementos del arreglo
for(let posicion=0; posicion < series.length; posicion++){
    document.write('<br>Elemento: '+series[posicion]);
}


// bucle para mostrar todos los elementos del arreglo con while
/*
let pos = 0;

while(pos < series.length)
{
    document.write('<br>Elemento: '+series[pos]);
    pos++;
}*/

// cuando accedemos a elementos que no definimos, no existen (undefined)
document.write('<br>'+ series[10]);

// agregar un elemento el final del arreglo
series.push('Ozark');

// bucle para mostrar todos los elementos del arreglo
for(let posicion=0; posicion < series.length; posicion++){
    document.write('<br>Elemento: '+series[posicion]);
}

// agregar un elemento en una posicion particular splice(posicion,borrar es 0,borrar en adelante +, eliminar 1 y lo ultimo el elemento que quermos agregar)
series.splice(3,0,'Breaking Bad');

document.write('<hr>');
for(let posicion=0; posicion < series.length; posicion++){
    document.write('<br>Elemento: '+series[posicion]);
}

// eliminar desde una posicion particular
series.splice(5,2); //(posicion del elemento, cantidad de elementos a eliminar);
series.splice(7); //borra desde la posicion 5 en adelante, cuando ponemos un solo parametro

document.write('<hr>');
for(let posicion=0; posicion < series.length; posicion++){
    document.write('<br>Elemento: '+series[posicion]);
}

//modificar un elemento del arreglo
series[6] = true;

document.write('<hr>');
for(let posicion=0; posicion < series.length; posicion++){
    document.write('<br>Elemento: '+series[posicion]);
}


