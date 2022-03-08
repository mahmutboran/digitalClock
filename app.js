let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let pm_am = document.querySelector(".pm-am");


function digitalclock() {

if (new Date().getHours()<12){
    pm_am.innerText="AM"
    hour.innerText=new Date().getHours().toString().padStart(2, "0");
}else if (new Date().getHours()>12){
    pm_am.innerText="PM"
    hour.innerText=new Date().getHours().toString().padStart(2, "0")-12;
}

minute.innerText=new Date().getMinutes().toString().padStart(2, "0");
second.innerText=new Date().getSeconds().toString().padStart(2, "0");
};


setInterval(digitalclock,1000)


//!https://www.w3schools.com/jsref/jsref_tolocalestring.asp
// setInterval(() => {
//     hour.innerText=new Date().toLocaleString('en-US', { hour: '2-digit', minute:"numeric",second:"numeric",hour12: true });
// }, 1000);