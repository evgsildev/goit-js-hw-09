import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  button: document.querySelector('button'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', getPromise);

function getPromise(evt) {
  evt.preventDefault();

  const firstDelay = Number(refs.firstDelay.value);
  const delayStep = Number(refs.delayStep.value);
  const amount = Number(refs.amount.value);

  if (firstDelay > 0 && delayStep > 0 && amount > 0) {
    for (let i = 0; i < amount; i += 1) {
      createPromise(i, firstDelay + delayStep * i)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
        });
    }
  } else {
    Notify.failure(`No no no firstDelay, delayStep, amount must be > 0`);
  }
}
