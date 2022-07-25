import swal from "sweetalert";

const form = document.getElementById("telegram_form");
//функция для захвата данных из тегов формы и синтеза JSON-обьекта
function toJSONString(form) {
  var obj = {};
  var elements = form.querySelectorAll("input, select, textarea");
  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;
    if (name) {
      obj[name] = value;
    }
  }
  return JSON.stringify(obj);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    //получаем данные из формы
    const json = toJSONString(form);
    //создаем соединение
    ///////////////////////////////////
    /////////////SweetAlert//////////
    ///////////////////////////////////
    //обрабатываем ответ сервера
    xmlhttp.onload = function (oEvent) {
      console.log("xmlhttp.status", xmlhttp.status, "oEvent", oEvent);
      if (xmlhttp.status === 200) {
        swal({
          title: "Успешно отправлено!",
          icon: "success",
          timer: 2000,
        }),
          document.getElementById("telegram_form").reset();
        if (document.querySelector(".hystmodal__close")) {
          document.querySelector(".hystmodal__close").click();
        }
        // document.querySelector('.sa-success').style.display = 'block'
        // document.querySelector('.sa-button-container').style.opacity = '0'
      }
      if (xmlhttp.status !== 200) {
        swal({
          title: "Произошла ошибка!",
          icon: "error",
          timer: 2000,
        }),
          document.getElementById("telegram_form").reset();
        if (document.querySelector(".hystmodal__close")) {
          document.querySelector(".hystmodal__close").click();
        }
        // document.querySelector('.sa-error').style.display = 'block'
        // document.querySelector('.sa-button-container').style.opacity = '0'
      }
    };
    ////////////////////////////
    ////////////////////////////
    // xmlhttp.setRequestHeader('Content-Type', 'application/json')
    //отправляем
    // xmlhttp.send(json)
  });
  // .finally(() => {
  //   console.log("Final");
  // });
}
