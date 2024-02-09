// Dobre os Números
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro)
*/

/**
 * Para Cada elemento:
 * Retorne apenas uma string com o nome da pessoa
 * Remova apenas a chave 'nome' do objeto
 * Adicione uma chave id em cada objeto
 */
const pessoas = [
    {nome: 'Luiz', idade : 62},
    {nome: 'Maria', idade : 23},
    {nome: 'Eduardo', idade : 55},
    {nome: 'letícia', idade : 19},
    {nome: 'Rosana', idade : 32},
    {nome: 'Wallace', idade : 47},
]

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade : obj.idade}))
const id = pessoas.map((obj , indice) => {
    obj.id = (indice + 1)
    return obj
})
console.log(id)