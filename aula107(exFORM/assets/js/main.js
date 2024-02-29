class ValidForms {
    constructor() {
        this.forms = document.querySelector('.forms'); 
        this.eventos(); //aciona o método quando a classe for criada
    }
    eventos() {
        this.forms.addEventListener('submit', e => {
            this.handleSubmit(e) // controla o 'submit' do forms 
        })
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const validFields = this.isValidFields(); //campos válidos ? 
        //const validPassword = this.isValidPasswrod(); // senhas validas/iguais?

  
    }


    isValidFields() {
        let valid = true;
        
        for(let errorText of this.forms.querySelectorAll('.error-text')){ 
            errorText.remove() //remove as DIV com clase error-text
        }

        for (let fields of this.forms.querySelectorAll('.validar')) {
            const label = fields.previousElementSibling.innerText // label recebe o texto no label anterior 
            if (!fields.value){ //string vazia retorna false
                this.createErro(fields, `O campo "${label}" não pode estar em branco.`)
            }

            if(fields.classList.contains('cpf')){
                if(!this.validCPF(fields)) valid = false;

            }

            if(fields.classList.contains('user')){
                if(!this.validUser(fields)) valid = false;

            }
        }
    }

    validUser(field){
        const user = field.value;
        let valid = true
        if (user.length > 12 || user.length < 3) {
            this.createErro(field,'Usuário deve ter entre 3 e 12 letras.')
            valid = false;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createErro(field,'Nome de usuário só pode conter letras e/ou numeros.')
            valid = false;
        }
        return valid;
    }

    validCPF(field){
        const cpf = new ValidaCPF(field.value)

        if(!cpf.valida()){
            this.createErro(field,'CPF inválido')
            return false
        }
        return true
    }

    createErro(fields, msg){
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('error-text');
        fields.insertAdjacentElement('afterend',div); // adciona o elemento 'div' após a field
    }

}

const forms = new ValidForms();