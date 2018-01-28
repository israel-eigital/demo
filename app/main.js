/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//ar persona = persona("Israel", "31/01/81");
//persona.edad = 100; // <= popiedad dinámica, se crea en el momento
//console.log(persona.edad);
// document.write(persona.getInfo());
//console.log(persona.valueOf());
//var producto = new Producto("Papas", 23.99);
// document.write(producto.getInfo());
//var casa = new casaProto();
//casa.direccion = "Av. principal";
//casa.numero = 1;
//console.log(casa);
// document.write(casa.getInfo());
//funcb(funca);
//console.log(arreglo);

/********* Angular ***********/
'use strict'
angular.module('myApp', []).controller('appCtrl', function($scope){

	$scope.xxx = 'Hola';
	$scope.names = [
		{nombre:'Pepe', edad: 20},
		{nombre:'Juan', edad: 22},
		{nombre:'Pedro', edad:12},
		{nombre:'Pablo', edad:36}
	];
	
});