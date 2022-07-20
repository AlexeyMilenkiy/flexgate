import axios from 'axios';

const TOKEN = '1696539093:AAHN1_BbiBAbfcZ5fQK-CXcVCtQ8lqfKDiM';
const CHAT_ID = '-1001387899416';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка</b>\n`;
    message += `<b>Отправитель</b> ${ this.name.value }\n`;
    message += `<b>Телефон</b> ${ this.phone.value }\n`;
    message += `<b>Модель</b> ${ this.model.value }\n`;
    message += `<b>Описание</b> ${ this.description.value }\n`;

    console.log(message);

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        // this.name = '';
        // this.phone = '';
        // this.model = '';
        // this.description = '';
        success.innerHTML = 'Message send';
        success.style.display = 'block';
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Final')
    })
})