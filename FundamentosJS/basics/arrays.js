//Arrays en Javascript
//Colección ordenada de datos
const miArray = new Array('1', 2, 3);
const otherArray = [1, 2, true, 1.4];
console.log(miArray);
console.log(otherArray);
console.log(miArray[0]);
console.log(otherArray[1]);
console.log(miArray[1]);
console.log(otherArray[2]);

otherArray[1] = 'One';
otherArray[2] = 'Three';
console.log(otherArray);
// Podemos insertar y extraer elementos
// push() para insertar al final
// unishift() para insertar al inicio
// pop() para extraer del final
// shift() para extraer del inicio

const pila =[]; // ultimo en entrar es primero en salir
pila.push(1);
pila.push(2);
pila.push(3);
pila.push(4);

console.log(pila);
pila.pop();
pila.pop();
console.log(pila);

const cola =[]; //primero en entrar es primero en salir
cola.push(1);
cola.push(2);
cola.push(3);
cola.push(4);

console.log(cola);
cola.pop();
cola.pop();
console.log(cola);

