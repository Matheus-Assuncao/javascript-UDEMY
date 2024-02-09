function Calculadora() { // cria função fábrica
    this.display = document.querySelector('.display');

    this.inicia = () => { // mpetodo que vai ser iniciado, deve fazer tudo da função
        this.getKey();
        this.getEnter();
    }

    this.getEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) { // verifica se a tecla é o ENTER
                this.makeAccount();
            }
        })
    }

    this.getKey = () => { // Observa a tecla clicada
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.addNum(el);
            if (el.classList.contains('btn-clear')) this.btnClear();
            if (el.classList.contains('btn-del')) this.deleteOne();
            if (el.classList.contains('btn-eq')) this.makeAccount();
        })
    }

    this.addNum = (el) => { //add tecla ao display
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.btnClear = () => this.display.value = '';// limpa display
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1); // deleta ultima coisa do display
    this.makeAccount = () => {
        try {
            const conta = eval(this.display.value)
            if (!conta) {
                alert('Conta Inválida')
                return
            }

            this.display.value = conta;

        } catch (e) {
            alert('Conta Inválida')
            return
        }
    }

}

const calculadora = new Calculadora(); // add nova calculadora a const 
calculadora.inicia(); // chama o método inicia que está na calculadora