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
    document.write('<br>Elemento'+series[posicion]);
}


// bucle para mostrar todos los elementos del arreglo con while
/*
let pos = 0;

while(pos < series.length)
{
    document.write('<br>Elemento: '+series[pos]);
    pos++;
}*/