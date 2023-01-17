import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const inputField = document.querySelector('#datetime-picker');
const startBTn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
startBTn.setAttribute('disabled', 'disabled');

let newDate = null;
let id = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > options.defaultDate) {
      startBTn.removeAttribute('disabled');
    } else {
      startBTn.setAttribute('disabled', 'disabled');
      window.alert('Please choose a date in the future');
    }
    newDate = selectedDates[0] - new Date();
  },
};
startBTn.addEventListener('click', () => {
  id = setInterval(addLeadingZero, 1000);
});

function addLeadingZero() {
  console.log(newDate);
  startBTn.setAttribute('disabled', 'disabled');
  newDate -= 1000;
  if (newDate <= 1000) {
    clearInterval(id);
  }
  dataDays.textContent =
    convertMs(newDate).days < 10
      ? '0' + convertMs(newDate).days
      : convertMs(newDate).days;
  dataHours.textContent =
    convertMs(newDate).hours < 10
      ? '0' + convertMs(newDate).hours
      : convertMs(newDate).hours;
  dataMinutes.textContent =
    convertMs(newDate).minutes < 10
      ? '0' + convertMs(newDate).minutes
      : convertMs(newDate).minutes;
  dataSeconds.textContent =
    convertMs(newDate).seconds < 10
      ? '0' + convertMs(newDate).seconds
      : convertMs(newDate).seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
flatpickr(inputField, options);
