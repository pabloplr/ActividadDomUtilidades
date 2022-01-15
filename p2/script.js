function imprimeCalendario(e) {
    const body_element = document.getElementsByTagName('body')[0];
    let table_element = document.createElement('article');
    let final_calendar_array = getDays(new Date().getMonth(), new Date().getFullYear());
    for (let i = 0; i < new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay(); i++) {
        final_calendar_array.unshift(' ');
    }
    getDaysOfWeek().forEach(day => {
        final_calendar_array.unshift(day);
    });
    final_calendar_array.forEach(elemnt => {
        let day = document.createElement('div');
        day.innerHTML = elemnt;
        table_element.appendChild(day);
    });
    body_element.appendChild(table_element);
}

function getDays(month, year) {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push(date.getDate().toString());
        date.setDate(date.getDate() + 1);
    }
    return days;
}

function getDaysOfWeek() {
    return ['S', 'V', 'J', 'X', 'M', 'L', 'D'];
}