exports.paginaInicial = (req, res) => { 
    res.send(`
    <form action="/" method="post">
    nome : <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
};

exports.trataPost = (req,res) => res.send(`Sou sua nova rota de POST, bem vindo <strong>${req.body.nome}</strong>`);