let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let ampm1 = document.getElementById('ampm');

const updateClock = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    let ampm = "AM";
    if (hours > 12) {
        ampm = "PM";
    }
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
    ampm1.innerHTML = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock()