import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");

formEl.addEventListener('input', throttle(onFormData, 500));
formEl.addEventListener('submit', onSubmit);

let formData = {};

function onFormData(event) {
    formData[event.target.name] = event.target.value;
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
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
        email.value = data.email;
        message.value = data.message;
    }
};

(updateOutput)();