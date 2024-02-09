//defiineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configurável
        get: () => {
            return estoquePrivado
        },
        set: (valor) => {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem')
                return
            }
            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('luna', 4000, 1);
//console.log(p1)
p1.estoque = 'sei la';
console.log(p1.estoque)