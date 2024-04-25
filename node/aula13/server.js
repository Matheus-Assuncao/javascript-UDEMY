const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middleGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

//Usar views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

//Nossos próprios middlewares
app.use(middleGlobal)
app.use(routes);

//Usar a porta
app.listen(3000, () => console.log('Acessar http://localhost:3000')); //link para acesasr servidor