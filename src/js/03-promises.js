import Notiflix, { Notify } from 'notiflix';
const formField = document.querySelector('.form');
const formDelay = document.querySelector('[name="delay"]');
const formStep = document.querySelector('[name="step"]');
const formAmount = document.querySelector('[name="amount"]');

formField.addEventListener('submit', onHandleClick);
let amount = 0;
let step = 0;
let firstStep = 0;
let delayNew = 0;

function onHandleClick(e) {
  e.preventDefault();

  amount = +formAmount.value;
  step = +formStep.value;
  firstStep = +formDelay.value;

  for (let i = 0; i < amount; i++) {
    delayNew = firstStep + step * i;
    createPromise(i + 1, delayNew)
      .then(data => Notiflix.Notify.success(data))
      .catch(error => Notiflix.Notify.failure(error));
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delayNew);
  });
}
