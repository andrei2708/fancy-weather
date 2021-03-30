let clockToday = document.querySelector(".time-today");
let dateToday = document.querySelector(".date-today");

function clock() {
  /*let time = new Date();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  if(hours.length < 2) {
    hours = '0' + hours;
  }
  if(minutes.length < 2) {
    minutes = '0' + minutes;
  }
  let clockString = hours + ':' + minutes;*/
  let clockString = new Date().toLocaleString('en', { hour: '2-digit', minute: '2-digit'});
  clockToday.textContent = clockString;
}
clock();

function dateDay () {
  let d = new Date().toLocaleString('en', { weekday: 'short', day: 'numeric', month: 'long'});
   dateToday.textContent = d;
}
dateDay();

