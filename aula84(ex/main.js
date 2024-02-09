//retorne numeros maiores que 10-
//const numeros = [5, 50, 80, 78, 3, 4, 5, 11, 3, 8, 30];
//const numerosFiltrados = numeros.filter( valor => valor > 10 );
//console.log(numerosFiltrados)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 33 },
    { nome: 'Wallace', idade: 47 }
]

const pessoascomNomeGrande = pessoas.filter(obj => obj.nome.length > 6);
const pessoasComMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA)