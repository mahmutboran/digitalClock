let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let pm_am = document.querySelector(".pm-am");


function digitalclock() {
    
hour.innerText=new Date().getHours().toString().padStart(2, "0");
minute.innerText=new Date().getMinutes().toString().padStart(2, "0");
second.innerText=new Date().getSeconds().toString().padStart(2, "0");}
if (new Date().getHours()<12){
    pm_am.innerText="AM"
}
setInterval(digitalclock,1000)