function newFunction(name, age, country){
    var name = name || 'camilo';
    var age = age || 24;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

// es6
// parametros por defecto
function newFunction2(name = 'Camilo', age = 24, country = 'Colombia'){
    console.log(name, age, country)
}

newFunction2();
newFunction2('Andres', 24, 'Argentina')



let hello = 'Hello ';
let world = 'World';
let epicPhrase = hello + world;
console.log(epicPhrase);

// Template literals

let epicPhrase2 = `${hello } ${world}`;
console.log(epicPhrase2)