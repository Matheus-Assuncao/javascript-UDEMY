require('dotenv').config();

const express = require('express');
const app = express();

//conexão com base de dados
const mongoose = require('mongoose');
//const connectionString = 'mongodb+srv://matheusassuncao:CarrosLegais2311**@cluster0.5p74fmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('online');
        console.log('Coneccted with DB')
    }).catch((e) => console.log(e));

//Requirindo rotas
const routes = require('./routes');
const path = require('path');
const e = require('express');
//const { middleGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

//Usar views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

//Nossos próprios middlewares
app.use(routes);

//Usar a porta
app.on('online', () => { // espera sinal emitido quando conectar com DB
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000')
    }); 
});
