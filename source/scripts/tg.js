import axios from "axios";
import swal from "sweetalert";

const TOKEN = "1696539093:AAHN1_BbiBAbfcZ5fQK-CXcVCtQ8lqfKDiM";
const CHAT_ID = "-1001387899416";
// const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const URI_API = "/telegram";


document.getElementById("telegram_form").addEventListener("submit", function (e) {
    e.preventDefault();

    let message = `<strong>Заказ с сайта Flexgate.ru</strong>\n`;
    message += `\n<strong>name</strong> ${this.name.value}\n`;
    message += `<strong>tel</strong> ${this.phone.value}\n`;
    message += `<strong>model</strong> ${this.model.value}\n`;
    message += `<strong>comment</strong> ${this.description.value}\n`;
    if (this.feedback.checked === true) {
        console.log(this.feedback.checked);
        message += `\n<strong>ПЕРЕЗВОНИТЬ</strong>\n`;
    }

    axios.post(URI_API, { data: message })
      .then((response) => {
        console.log(response);
        swal({
          title: "Успешно отправлено!",
          icon: "success",
          timer: 2000,
        });
        document.getElementById('telegram_form').reset();
        if (document.querySelector('.hystmodal__close')) {
          document.querySelector('.hystmodal__close').click()
        }
      })
      .catch((error) => {
        console.warn(error);
        swal({
          title: "Произошла ошибка!",
          icon: "error",
          timer: 2000,
        });
      })
      .finally(() => {
        console.log("Final");
      });
  });
