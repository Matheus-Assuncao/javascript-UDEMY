function Produto (nome,preco) {
    this.nome = nome,
    this.preco = preco    
};

Produto.prototype.desconto = function (porcentagem) {
    this.preco = this.preco - (this.preco * (porcentagem / 100))
}

const p1 = new Produto('mouse' , 100)
const p2 = {
    nome : 'Teclado',
    preco : 250
}
Object.setPrototypeOf(p2,Produto.prototype)

const p3 = Object.create(Produto.prototype)
p3.preco = 130
p3.desconto(50)

console.log(p3)