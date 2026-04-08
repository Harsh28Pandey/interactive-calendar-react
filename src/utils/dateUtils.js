export function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(null);

    for (let i = 1; i <= totalDays; i++) {
        days.push(new Date(year, month, i));
    }

    return days;
}