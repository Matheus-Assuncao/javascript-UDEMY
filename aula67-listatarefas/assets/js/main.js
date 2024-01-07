function taskList(){
    const task = document.querySelector('#task');
    const result = document.querySelector('.result');

    function getResut(task){
        const p = document.createElement('p')
        p.innerText = task
    }

    console.log(getResut('sei la'))
};
taskList();