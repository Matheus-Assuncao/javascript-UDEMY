class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falaName(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

exports.Pessoa = Pessoa;