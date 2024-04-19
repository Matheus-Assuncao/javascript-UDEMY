const path = require('path');
const file = path.resolve(__dirname, 'pessoas.json');
const escreve = require('./modules/escrever')

/*
const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Luna'}
];
const pessoasJson = JSON.stringify(pessoas, '', 2)
es
*/

const ler = require('./modules/ler');

async function recebe(){
    const data = await ler(file);
    formatData(data);
};

function formatData(data){
    usedData = JSON.parse(data);
    usedData.forEach(element => console.log(element));
}

recebe();