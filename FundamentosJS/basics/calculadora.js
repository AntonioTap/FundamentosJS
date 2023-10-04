const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

const getValues = () => {
    const numero1 = Number(num1.value) || 0;
    const numero2 = Number(num2.value) || 0;
    return [numero1, numero2];
}

const sumar = () => {
    const valores = getValues();
    result.value = valores[0] + valores[1];
}
const restar = () => {
    const valores = getValues();
    result.value = valores[0] - valores[1];
}
const dividir = () => {
    const valores = getValues();
    result.value = valores[0] / valores[1];
}
const multiplicar = () => {
    const valores = getValues();
    result.value = valores[0] * valores[1];
}
const limpiar = () => {
    const valores = getValues();
    result.value = '';
    num1.value = '';
    num2.value = '';
}

const random = () =>{
    num1.value = Math.round(Math.random()*10000);
    num2.value = Math.round(Math.random()*10000);

}