exports.paginaInicial = (req, res) => res.render('index');
exports.trataPost = (req,res) => res.send(`Sou sua nova rota de POST, bem vindo <strong>${req.body.cliente}</strong>`);