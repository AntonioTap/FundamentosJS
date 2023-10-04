// Funciones con Javascript

/* 
function nombre(params){
    body function
}
*/

/**
const nombre = function(params){
    body function
 }
 */

 //función sin parámetros sin retorno
 function saluda(){
    console.log('Helloo!');
 }

 saluda();

 //función con parámetros sin retorno
 const saludaA = function(name){
    console.log(`Holaa ${name}`);
 }
 saludaA('Batman');

 //función con parámetros y retorno
 const duplica = function(num){
    return num * 2;
 }
 const doble = duplica(26);
 console.log(doble);

 //Arrow Function, funciones de flecha de ES6
 /*
 (params) => {
    body function
 }
 */
const getFullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}
const nombre = getFullName('Star', 'Butterfly');
console.log(nombre);

//Podemos omitir () con un único parámetro
const minusculas = (word) => {
    return word.toLowerCase();
}

console.log(minusculas('HELLO'))
const mayusculas = word => {
    return word.toUpperCase();
}
console.log(mayusculas('hello'));

//Podemos omitir llaves y return si solo hay una línea
const cuadrado = num => num * num;
console.log(cuadrado(25));