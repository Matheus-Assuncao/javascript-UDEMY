const express = require('express');
const app = express();

// CRUD ->  CREATE, READ, UPDATE, DELETE
//           POST   GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página

app.get('/', (req, res) => { 
    res.send('Hello world!'); //responde a mensagem
});

app.get('/contato', (req,res) => {
    res.send('Obrigado por entrar em contato');
});

app.listen(3000, ()=>{ //manda o servidor usar a porta
    console.log('Acessar http://localhost:3000') // link para acessar servidor
    console.log('servidor executando na porta 3000')
});