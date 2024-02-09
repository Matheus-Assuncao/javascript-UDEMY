//Retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> Dobrar os valores
// -> reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15];
const pares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor)
console.log(pares)