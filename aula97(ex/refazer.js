//705.484.450-52 <-> 070.987.720-03

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true, // Podemos ver
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); // só recebe numeros
        }
    })
}
ValidaCPF.prototype.valida = function () {
    if (this.cpfLimpo === undefined) return false;
    if (this.cpfLimpo.length != 11) return false;
    if (this.isSequence()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const fullCPF = cpfParcial + digito1 + digito2

    return fullCPF === this.cpfLimpo;
}
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce(function (ac, v) {
        ac += regressivo * Number(v);
        regressivo --
        return ac
    }, 0)
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};
ValidaCPF.prototype.isSequence = function () {
    const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequence === this.cpfLimpo
}

const cpf = new ValidaCPF('070.987.720-03');
if (cpf.valida()) console.log('CPF VÁLIDO');
else console.log('CPF INVÁLIDO');