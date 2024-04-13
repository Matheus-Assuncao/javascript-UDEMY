import geraSenha from './geradores';

const resultado = document.querySelector('.resultado');
const qtdCaracteres = document.querySelector('#qtd-caracteres');
const addNum = document.querySelector('#chk-addnum');
const addMaius = document.querySelector('#chk-addMaius');
const addMinus = document.querySelector('#chk-addMinus');
const addSibolos = document.querySelector('#chk-addSimbolo');
const btnGera = document.querySelector('.btn-spanwSenha');

export default () => {
    btnGera.addEventListener('click', () => {
        resultado.innerHTML = gera();
    })
}   

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        addMaius.checked,
        addMinus.checked,
        addNum.checked,
        addSibolos.checked
    )
    return senha || 'Nada Selecionado';
}