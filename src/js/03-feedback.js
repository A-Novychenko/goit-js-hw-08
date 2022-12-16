// Відстежуй на формі подію input, і щоразу записуй у локальне сховище
// об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища,
// і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми,
// а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
document.body.style.backgroundColor = 'black'; //
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputMail = document.querySelector('.feedback-form input');
const inputText = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const isThereDataInStorage = localStorage.getItem(STORAGE_KEY);
let localData = JSON.parse(isThereDataInStorage) || {};

form.addEventListener('input', onFormInput);
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

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
  localData = {};
}
