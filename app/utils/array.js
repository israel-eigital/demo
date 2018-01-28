// lo que va entre {} se toma como objeto

var arreglo = [
    {nombre: 'Pepe', edad: 20},
    {nombre: 'Juan', edad: 23}
];

// var arreglo2 = new Array();
// arreglo2.push('juan', 'pedro', function(){return 'soy de arreglo2'});
// document.writeln(arreglo2[0] + ' ');

// se puede acceder a través de
document.write(arreglo[0].nombre + ' ');
// document.write(arreglo[0]['nombre'] + ' ');

arreglo.sort(); // ordena
arreglo.reverse(); // ordena al revés
arreglo.push();
arreglo.pop();
arreglo.join(';'); // unta elementos del arreglo en string

// transforma obketo JS a string JSON
var json = JSON.stringify({nombre:'pepe', apellido:'peres'}); 
console.log(json);

// transforma String JSON a obj js
var obj = JSON.parse(json);
console.log(obj);
