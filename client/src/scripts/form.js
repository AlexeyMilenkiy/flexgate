import { axiosInstance } from './axios';
import swal from 'sweetalert';

const form = document.getElementById('telegram_form');
const closeModal = document.querySelector('.hystmodal__close');

const sendData = async (data) => {
  try {
    await axiosInstance.post('/sendForm', data);
    swal({
      title: 'Успешно отправлено!',
      icon: 'success',
      timer: 2000,
    });
    form.reset();
    closeModal?.click();
  } catch (error) {
    swal({
      title: 'Произошла ошибка!',
      icon: 'error',
      timer: 2000,
    });
  }
};

const onSubmitForm = function (e) {
  e.preventDefault();
  const data = {
    name: this.name.value,
    tel: this.phone.value,
    model: this.model.value,
    comment: this.description.value,
    checked: this.feedback.checked,
  };
  sendData(data);
};

form.addEventListener('submit', onSubmitForm);
