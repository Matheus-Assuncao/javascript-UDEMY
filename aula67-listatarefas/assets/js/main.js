function taskList(){
    const result = document.querySelector('.result');
    const send = document.querySelector('#send');



    send.addEventListener('click' , (e) => {
        const task = document.querySelector('#task').value;
        const li = document.createElement('li');
        const p = document.createElement('p');
        const button = document.createElement('button');
        button.classList.add('buttontask');
        button.innerText = 'apagar'
        p.innerText = task
        p.appendChild(button)
        li.appendChild(p)
        result.appendChild(li)
        console.log(task)
    }) 

    

};
taskList();