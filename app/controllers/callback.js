var funca = function(){
    console.log('Soy A');
};

var funcb = function(a){
    console.log('Soy B');
    if(typeof a === 'function'){
        a(); // se tiene que mandar llamar como método
    }
    else{
        console.log('No es funcion');
    }
};