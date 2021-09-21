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

let lorem = "Quiero construir una frase epica \n"
 + "otra frase epica!"

let lorem2 =`otra frase epica x2 hahha
ahora es otra frase epica
`;

console.log(lorem)
console.log(lorem2);

let person = {
    'name': 'Camilo',
    'age': 24,
    'country': 'Colombia'
}

console.log(person.name)
console.log(person.age)
console.log(person.country)


//Destructurar elementos
//Puedo traer los elementos que necesito
let {country} = person;
console.log(country)

//Operador de propagacion ...
let team1 = ['Camilo', 'Andres', 'Pepito']
let team2 = ['Pepita', 'Juanita', 'Lupita']

let education = ['David', ...team1, ...team2]
console.log(education)

// Utilizar let 

// disponible de forma global
// let solo disponible en el bloque de codigo definido.

var hola = 'Hola';
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global let';
    console.log(globalLet)
}

console.log(globalVar);

//const no cambia su valor
const a = 'b';
a = 'a';
console.log(a);

let name = 'Camilo';
let age = 24;
 
//es5
obj = { name: name, age: age };
//es6
obj2 = {name, age};
console.log(obj2);

//Arrow function

const names32 = [
    {name = 'Camilo', age = 24}
]

//es5
let listOfNames = names32.map(function(item){
    console.log(item.name)
});

//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
   // ...
}

const listOfNames4 = name => {
    // ...
}

const square = num => num * num;


//promesas en algun momento va suceder algo

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        }else{
            reject('Algo Salio mal')
        }
    });
}

helloPromise()
.then(Response => console.log(Response))
.catch(error => console.log(error));

// Clases 
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return valueA + valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// Trabajar con modulos
import { hello } from "./module.js";

const hola = hello;
console.log(hola);

function* helloWorld(){
    if(true){
        yield 'Hello! ';
    }
    if(true){
        yield 'World ';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);