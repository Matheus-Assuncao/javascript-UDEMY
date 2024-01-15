function TaskList() {
    const inputTask = document.querySelector('#task');
    const btnTask = document.querySelector('#send');
    const ulResult = document.querySelector('.result');

    function createLi() { // Função que cria Li;
        const li = document.createElement('li');
        return li
    }

    function createBtnDelete(li) { // Cria botão 'APAGAR' e adiciona na li;
        li.innerText += '  '
        const btnDelete = document.createElement('button');
        btnDelete.innerText = 'APAGAR';
        btnDelete.classList.add('delete')
        li.appendChild(btnDelete)
    }

    function formatInput() {
        inputTask.value = '';
        inputTask.focus();
    }

    function createtask(task) { // Função que cria e formata a tarefa;
        const li = createLi(task)
        li.innerText = task;
        createBtnDelete(li)
        ulResult.appendChild(li)
        formatInput();
        salvatarefas();
    }

    inputTask.addEventListener('keypress', (e) => { // função que ativa quando precionamos uma tecla
        //console.log(e)  --  obter KeyCode
        if (e.keyCode === 13) { // verificar se o código da tecla é = código tecla ENTER
            createtask(inputTask.value);
        }
    })

    btnTask.addEventListener('click', (e) => { // Escutador no botão de enviar que ativa função Criatarefa;
        if (!inputTask.value) return
        createtask(inputTask.value)
    })

    document.addEventListener('click', (e) => { // Escutador em documento para botão 'APAGAR' funcionar.
        const element = e.target // recebe o elemento que foi clicado.
        if (element.classList.contains('delete')) {
            element.parentElement.remove();
            salvatarefas();
        }
    })

    function salvatarefas() { // função que salva as tasks em um JSON
        const liTarefas = ulResult.querySelectorAll('li'); // Obtém todos os <li> da lista de tarefas em uma nodeList
        const taskList = [] // array que vai receber as tasks

        for (let tarefa of liTarefas) { // Itera sob a NodeList
            let textTask = tarefa.innerText; // recebe o texto dos <li> que estão em liTarefas 
            textTask = textTask.replace('APAGAR', '').trim(); // recebe o texto sem a palavra 'APAGAR' , TRIM - remove espaços
            taskList.push(textTask); // coloca o texto na array que guarda as tasks
        }

        const tasksJSON = JSON.stringify(taskList); // converte o array em uma string em JSON
        localStorage.setItem('tasks', tasksJSON); // salva a string JSON no banco de dados do navegador.
    }

    function adcionaTarefasSalvas(){ // função que captura tasks do JSON e coloca de volta.
        const recoverTasks = localStorage.getItem('tasks'); // captura do array em JSON salvo no localStorage.
        const taskList = JSON.parse(recoverTasks) // converte uma string JSOM em um OBJETO

        for (tarefa of taskList){ // itera sob a lista de tarefas
            createtask(tarefa); // cria <li> com as tarefas
        }
    }

    adcionaTarefasSalvas(); // adiciona as tarefas salvas quando carregamos a página
}
TaskList();