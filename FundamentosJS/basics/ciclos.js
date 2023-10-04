//Ciclos en Javascript
//for

for (let i = 0; i < 3; i++) {
    console.log("indice " + i);
}

//While
let i = 0;
while (i < 3) {
    console.log("Indice " + i);
    i++;
}

//do While
i = 0;
do {
    console.log('Indice ' + i);
    i++;
} while (i === 0);

//recorriendo objetos
const letras = 'abcd';
const numeros = [3,1,4,2];

for (let i = 0; i < letras.length; i++) {
    console.log(letras[i]);
}

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}

//for of
console.log('For of\n');

for (const letra of letras) {
    console.log(letra);
}

for (const numero of numeros) {
    console.log(numero);
}