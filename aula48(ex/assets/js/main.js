const h1 = document.querySelector('.container h1');
const calendar = new Date();

function getNameDay(numberDay) {
    let nameDay;
    switch (numberDay) {
        case 0:
            nameDay = 'Domingo';
            return nameDay;
        case 1:
            nameDay = 'Segunda-feira';
            return nameDay;
        case 2:
            nameDay = 'Terça-Feira';
            return nameDay;
        case 3:
            nameDay = 'Quarta-feira';
            return nameDay;
        case 4:
            nameDay = 'Quinta-feira';
            return nameDay;
        case 5:
            nameDay = 'Sexta-feira';
            return nameDay;
        case 6:
            nameDay = 'Sábado';
            return nameDay;
        default:
            nameDay = 'Dia não identificado';
            return nameDay;
    }
}

function getNameMonth(numberMonth) {
    let nameMonth;
    switch (numberMonth) {
        case 0:
            nameMonth = 'janeiro';
            return nameMonth;
        case 1:
            nameMonth = 'Fevereiro';
            return nameMonth;
        case 2:
            nameMonth = 'Março';
            return nameMonth;
        case 3:
            nameMonth = 'Abril';
            return nameMonth;
        case 4:
            nameMonth = 'Maio';
            return nameMonth;
        case 5:
            nameMonth = 'Junho';
            return nameMonth;
        case 6:
            nameMonth = 'Julho';
            return nameMonth;
        case 7:
            nameMonth = 'Agosto';
            return nameMonth;
        case 8:
            nameMonth = 'Setembro';
            return nameMonth;
        case 9:
            nameMonth = 'Outubro';
            return nameMonth;
        case 10:
            nameMonth = 'Novembro';
            return nameMonth;
        case 11:
            nameMonth = 'Dezembro';
            return nameMonth;
        default:
            nameMonth = 'Mês não identificado';
            return nameMonth;
    }
}

function formatDate(calendar) {
    const nameDay = getNameDay(calendar.getDay());
    const nameMonth = getNameMonth(calendar.getMonth());

    return `${nameDay}, ${calendar.getDate()} de ${nameMonth} de ${calendar.getFullYear()}. ${calendar.getHours()}:${calendar.getMinutes()}`
}

h1.innerHTML = formatDate(calendar)