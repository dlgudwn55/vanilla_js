const calendar = document.getElementById("calendar");
const clock = document.getElementById("clock");
const dayList = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];

function getClock() {
    const now = new Date();
    year = String(now.getFullYear());
    month = String(now.getMonth() + 1);
    date = String(now.getDate());
    day = dayList[now.getDay()];
    hours = String(now.getHours()).padStart(2, "0");
    minutes = String(now.getMinutes()).padStart(2, "0");
    seconds = String(now.getSeconds()).padStart(2, "0");

    calendar.innerText = `${year}-${month}-${date}(${day})`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);