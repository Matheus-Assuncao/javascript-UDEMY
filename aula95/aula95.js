// Produto -> aumento, desconto
// Camiseta -> cor <> caneca -> material

function Produto(nome, preco) {
    this.nome = nome,
        this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
},

    Produto.prototype.desconto = function (quantia) {
        this.preco -= quantia
    }

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco),
        this.material = material
    Object.defineProperty(this, 'estoque',{
        enumerable : true,
        configurable : false,
        get: function (){
            return estoque
        },
        set: function (valor) {
            if (typeof valor != "number") return
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('star wars mug', 5, 'porcelana', 5);
caneca.aumento(10)

console.log(caneca)