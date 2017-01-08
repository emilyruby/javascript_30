const second_hand = document.querySelector('.second-hand');
const minute_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');

function setTime() {
  setSecond();
  setMinute();
  setHour();
}

function setSecond() {
  const now = new Date();
  const seconds = (((now.getSeconds()) / 60) * 360) + 90;
  second_hand.style.transform = `rotate(${seconds}deg)`
}

function setMinute() {
  const now = new Date();
  const minutes = (((now.getMinutes()) / 60) * 360) + 90;
  minute_hand.style.transform = `rotate(${minutes}deg)`;
}

function setHour() {
  const now = new Date();
  const hour = (((now.getHours()) / 12) * 360) + 90;
  hour_hand.style.transform = `rotate(${hour}deg)`;
}

setInterval(setTime, 1000);
