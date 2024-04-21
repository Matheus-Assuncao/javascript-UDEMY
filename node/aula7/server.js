const express = require('express');
const app = express();

// CRUD ->  CREATE, READ, UPDATE, DELETE
//           POST   GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página

app.get('/', (req, res) => { 
    res.send(`
    <form action="/" method="post">
    nome : <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/contato', (req,res) => {
    res.send('Obrigado por entrar em contato');
});

app.post('/', (req,res)=>{
    res.send('Formulário enviado');
});

app.listen(3000, ()=>{ //manda o servidor usar a porta
    console.log('Acessar http://localhost:3000') // link para acessar servidor
    console.log('servidor executando na porta 3000')
});