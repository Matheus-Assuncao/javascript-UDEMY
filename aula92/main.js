const produto = { nome: 'Caneca', preco: 1.8 };
const exemplo = {
    ...produto, // expalha o objeto nesse objeto criado
    latido : 'auau' 
};

exemplo.nome = 'luna';
console.log(exemplo.nome)
console.log(produto.nome)