const config = require('../config/config.json');
const axios = require('axios');

module.exports.sendMsg = (req, res) => {
  let reqBody = req.data
  console.log('req >>', reqBody)
  let msg = reqBody
  axios.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`)
  .then((res) => {
    console.log(res.data);
  })
}



// module.exports.sendMsg = (req, res) => {
//     console.log('req.body', req.body);
//     const config = require('../config/config.json');
//     const http = require('request')
//     let reqBody = req.body
//     console.log('req >>', req);
//     // let fields = [
//     //   '<b>Имя</b>: ' + reqBody.name, // имя клиента
//     //   '<b>Телефон</b>: ' + reqBody.phone, // телефон клиента
//     //   '<b>Коммент</b>: ' + reqBody.comments, // комментарий к заказу
//     //   '<b>Модель</b>: ' + reqBody.model, // модель устройства
//     //   '<b>Услуга</b>: ' + reqBody.serviceName, // наименование услуги
//     //   '<b>Цена</b>: ' + reqBody.price, // цена услуги
//     //   '<b>Скидка</b>: ' + reqBody.discountPrice, // цена скидки
//     //   '<b>Перезвонить</b>: ' + reqBody.call, // цена скидки
//     //   // reqBody.text
//     // ]
//     let fields = ['lll', 'ddd', 'ppp']
//     let msg = ''
//     fields.forEach(field => {
//       msg += field + '\n'
//     });
//     msg = encodeURI(msg)
//     console.log('call request',msg )

    // http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, 

//     function (error, response, body) {
//       console.log('error:', error); 
//       console.log('statusCode:', response && response.statusCode); 
//       console.log('body:', body); 
//       if(response.statusCode===200){
//         res.status(200).json({status: 'ok', message: 'Успешно отправлено!'});
//       }
//       if(response.statusCode===400){
//         res.status(400).json({status: 'error', message: 'Произошла ошибка!'});
//       }
//     });
  
//   }