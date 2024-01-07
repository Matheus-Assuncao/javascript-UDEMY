const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const container = document.querySelector('.container');
const d = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    const {tag , texto} = elementos[i];
    const createTag = document.createElement(tag)
    createTag.innerText = texto
    d.appendChild(createTag)
}

container.append(d)