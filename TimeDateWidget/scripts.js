let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");
let loader = document.querySelector(".loader");
let clockContainer = document.querySelector(".clock-container");

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateClock() {
    const today = new Date();
    const date = today.getDate();
    let day = weekDays[today.getDay()];
    let month = monthNames[today.getMonth()];
    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;
    hoursContainer.textContent = hours + " :";
    minutesContainer.textContent = minutes + " :";
    secondsContainer.textContent = seconds + " ;";

    loader.style.display = "none";
    clockContainer.style.display = "flex";
    dateContainer.style.display = "block";
}

updateClock();
setInterval(updateClock, 1000);
