function relogio() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let seconds = 0;
    let timer;

    function startClock() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getHour(seconds);
        }, 1000)
    }

    function getHour(seconds) {
        const data = new Date(seconds * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    document.addEventListener('click', function (e) {
        const el = e.target
        console.log(el)
        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado')
            seconds = 0
            relogio.innerHTML = "00:00:00";
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            startClock();
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer)
        }
    })

}
relogio();