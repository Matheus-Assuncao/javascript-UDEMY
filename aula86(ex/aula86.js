//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 4 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
});

console.log(maisVelha)