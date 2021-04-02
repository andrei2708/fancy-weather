let dateToday = document.querySelector(".date-today");
let nextDay = document.querySelector(".name-day");

window.onload = function(){
  window.setInterval(function(){
    let now = new Date().toLocaleTimeString();
    let clock = document.querySelector(".time-today");
    clock.innerHTML = now;
  }, 1000);
 };

function dateDay () {
  let d = new Date().toLocaleString('en', { weekday: 'short', month: 'long', day: 'numeric'});
   dateToday.textContent = d;
}
dateDay();

function nextDateDay () {
  let n = new Date().toLocaleString('en', {weekday: "long"});
  nextDay.textContent = n;
}
nextDateDay();