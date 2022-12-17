import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputMail = document.querySelector('.feedback-form input');
const inputText = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const isThereDataInStorage = localStorage.getItem(STORAGE_KEY);
const localData = JSON.parse(isThereDataInStorage) || {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

if (isThereDataInStorage) {
  if (localData.email) {
    inputMail.value = localData.email;
  }
  if (localData.message) {
    inputText.value = localData.message;
  }
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...localData, ...formData })
  );
}

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;
  console.log({
    email: email.value,
    message: message.value,
  });

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
