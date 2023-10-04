//Funciones de Orden Superior
//High Order Functions

/*
    Funciones que reciben funciones
    como parámetros
*/

const myFunction = () =>{
    console.log('Ejecuta mi Función');
}

myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () => {
    console.log('Ejecuta función One');
}

const funTwo = (username) => {
    console.log('Ejecuta Función Two');
    console.log('Hola' + username);
}

const funThree = (otherFunction) => {
    console.log('Incia función 3');
    otherFunction();
    console.log('Termina función 3');
}

funOne();
funTwo('Frank');
funTwo('Star');
funThree(funOne);
funThree(() => console.log('Soy una Arrow Function'));