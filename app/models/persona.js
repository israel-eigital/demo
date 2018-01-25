// factory
var persona = function(nombre, fechaNac){
    var persona = {};
    persona.nombre = (nombre || 'Sin nombre'); // parámetros por defecto
    persona.fechaNac = (fechaNac || 'Sin fecha'); // parámetro por defecto
    persona.getInfo = function(){
        return "persona: { nombre:" + persona.nombre + ", fechaNac: " + persona.fechaNac + "} ";
    };
    return persona;
};

// objet
// new Objec() = {}
var Producto = function(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    
    this.getInfo = function(){
        // ojo con variables
        // los ` no los reconoce algunos compiladores
        // return `producto: { nombre: ${producto.nombre}, precio ${producto.precio} } `;
    };
};

//prototipe 
var casaProto = function(){};
casaProto.prototype.direccion = "no";
casaProto.prototype.numero = 0;
casaProto.prototype.getInfo = function(){
    return this.direccion + ",  " + this.numero;
};