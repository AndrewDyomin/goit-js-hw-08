import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");

formEl.addEventListener('input', throttle(onFormData, 500));
formEl.addEventListener('submit', onSubmit);
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

emailEl.setAttribute('required', '');
messageEl.setAttribute('required', '');

let formData = {};

function onFormData(event) {
    // formData[event.target.name] = event.target.value;
    formData.email = emailEl.value;
    formData.message = messageEl.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};

function onSubmit (event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};

function updateOutput() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (data) {
        emailEl.value = data.email;
        messageEl.value = data.message;
    }
};

(updateOutput)();