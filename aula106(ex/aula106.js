//705.484.450-52 <-> 070.987.720-03

class ValidaCPF {
    constructor(cpfLimpo) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            value: cpfLimpo.replace(/\D+/g, ''),
        });
    }
    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof (this.cpfLimpo) !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequence()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const validarCPF = cpfParcial + digito1 + digito2;
        return validarCPF === this.cpfLimpo;
    }
    isSequence(){
        const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequence === this.cpfLimpo
    }

    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        let total = cpfArray.reduce(function (ac, v) {
            ac += regressivo * Number(v);
            regressivo --
            return ac
        },0)
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
}