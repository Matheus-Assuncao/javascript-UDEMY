const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = calculaIMC(peso, altura)

    if (!peso) {
        setResultado(imc, false);
        return
    }
    if (!altura) {
        setResultado(imc, false);
        return
    }

    const nivel = verNivel(imc);
    const msg = `IMC: ${imc} , ${nivel}`
    setResultado(msg, true);

    console.log(nivel)

})

function criaP() {
    const p = document.createElement('p')
    return p
}

function calculaIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

/* Menos que 18,5
Entre 18,5 e 24,9
Entre 25 e 29,9
Entre 30 e 34,9
Entre 35 e 39,9
Mais do que 40
 
Abaixo do peso
Peso normal
Sobrepeso
Obesidade grau 1
Obesidade grau 2
Obesidade grau 3 */

function verNivel(imc) {
    const nivel = ['Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]

    return nivel[0]

}

function setResultado(msg, isTrue) {
    const resultado = document.querySelector('#resultado');
    const p = criaP();

    p.innerHTML = ''

    if (isTrue) {
        p.classList.add('deu-certo')
    } else {
        p.classList.add('deu-errado')
    }


    p.innerHTML = msg;
    resultado.appendChild(p);

}