import ValidaCPF from "./ValidaCPF";

export default class GeraCPF{
    rand(min=100000000,max=999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatado(cpf){
        return (       
            cpf.slice(0,3) + '.'+
            cpf.slice(3,6) + '.'+
            cpf.slice(6,9) + '-'+
            cpf.slice(9,11)
        )
    }

    geraNovoCPF(){
        const cpfSemDigitos = this.rand();
        const digit01 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digit02 = ValidaCPF.geraDigito(cpfSemDigitos + digit01);
        const novoCPF = cpfSemDigitos + digit01 + digit02;
        return this.formatado(novoCPF);
    }
}
