function escopo(){
    const form = document.querySelector('.form');
    const resultdo = document.querySelector('.resultado')

    const pessoas = []


    function recebeEventoForm(evento){
        evento.preventDefault();

        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let altura = form.querySelector('.altura');
        let peso = form.querySelector('.peso');

        pessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            altura: altura.value,
            peso: peso.value
        });
        console.log(pessoas);

        resultdo.innerHTML +=`${nome.value} ${sobrenome.value} ${altura.value} ${peso.value} <br>`
    }

    form.addEventListener('Submit', recebeEventoForm);


}

escopo();