const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const styleBody = getComputedStyle(document.body);
const colorBody = styleBody.backgroundColor;

for (p of ps){
    p.style.backgroundColor = colorBody
    p.style.color = 'white'
}