const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const ampm = document.getElementById("ampm");
const day = document.getElementById("day");
const timezone = document.getElementById('timezone');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];


function updateClock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().getDate();
    let mo = new Date().getMonth();
    let mon = months[mo];
    let y = new Date().getFullYear();
    let dy = new Date().getDay();
    let dyy = days[dy];
    let tz = new Date().getTimezoneOffset();

    if (h > 12) {
        h = h - 12;
        ampm.innerText = "PM"
    } else if (h == 0) {
        h = 12;
        ampm.innerText = "AM"
    } else {
        ampm.innerText = "AM"
    }



    h < 10 ? h = "0" + h : h;
    m < 10 ? m = "0" + m : m;
    s < 10 ? s = "0" + s : s;


    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText = s;
    date.innerText = d;
    month.innerText = mon;
    year.innerText = y;
    day.innerText = dyy;
    timezone.innerText = tz;

}

updateClock();

setInterval(updateClock, 1000);

let tim = new Date().getHours();
console.log(tim);
console.log(typeof tim);

const utc = document.getElementById('utc');

function utcTime() {

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    let n = new Date();
    let h = addZero(n.getUTCHours());
    let m = addZero(n.getUTCMinutes());
    let s = addZero(n.getUTCSeconds());
    let d = n.toDateString();

    let time = `${h}:${m}:${s} ${d}`;
    utc.innerHTML = time;
}

utcTime()

setInterval(utcTime, 1000);

console.log(new Date());

console.log(new Date(9834957309));

console.log(new Date('1999-09-05'));

console.log(new Date(1999,09,05,01,10,50,0));

console.log(Date.now());

console.log(Date.parse('September 05, 1999'));

console.log(new Date().getYear());


