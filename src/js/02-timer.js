import flatpickr from 'flatpickr';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dateInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

const date = new Date(); // Отримуємо наш поточний час

let chosenTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() > date.getTime()) {
      refs.startBtn.disabled = false;
      chosenTime = selectedDates[0].getTime();
      return chosenTime;
    } else {
      Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(refs.dateInput, options);

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;

  setInterval(() => {
    const currentTime = Date.now();
    const countingTime = convertMs(chosenTime - currentTime);

    if (chosenTime - currentTime > 0) {
      refs.dataDays.innerHTML = countingTime.days;
      refs.dataHours.innerHTML = countingTime.hours;
      refs.dataMinutes.innerHTML = countingTime.minutes;
      refs.dataSeconds.innerHTML = countingTime.seconds;
    } else {
      return;
    }
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
