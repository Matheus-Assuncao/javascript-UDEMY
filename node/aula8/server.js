const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

//GET
app.get('/', (req, res) => { 
    res.send(`
    <form action="/" method="post">
    nome : <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/teste/:idUsuarios?',(req,res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
})

//POST
app.post('/', (req,res)=>{
    console.log(req.body);
    res.send(`Bem vindo ${req.body.nome}`);
});

app.listen(3000, ()=>{ //manda o servidor usar a porta
    console.log('Acessar http://localhost:3000') // link para acessar servidor
    console.log('servidor executando na porta 3000')
});