const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const ampm = document.getElementById("ampm");
const day = document.getElementById("day");
const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
const months =["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];


function updateClock(){

let h = new Date().getHours(); 
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let d = new Date().getDate();
let mo = new Date().getMonth();
let mon = months[mo];
let y = new Date().getFullYear();
let dy = new Date().getDay();
let dyy = days[dy];

if(h>12){
    h = h-12;
    ampm.innerText="PM"
}else if (h == 0){
    h = 12;
    ampm.innerText="AM"
}else{
    ampm.innerText = "AM"
}



h<10 ? h = "0" + h : h;
m<10 ? m = "0" + m : m;
s<10 ? s = "0" + s : s;


hour.innerText = h;
minute.innerText=m;
seconds.innerText=s;
date.innerText=d;
month.innerText=mon;
year.innerText=y;
day.innerText=dyy;


}
   
updateClock();

setInterval(updateClock, 1000);



    