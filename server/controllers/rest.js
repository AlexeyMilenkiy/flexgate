import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const getMessage = ({
  name,
  tel,
  model,
  comment,
  checked,
}) => `<strong>Заказ с сайта Flexgate.ru</strong>\n
<strong>name</strong> ${name}\n
<strong>tel</strong> ${tel}\n
<strong>model</strong> ${model}\n
<strong>comment</strong> ${comment}\n
${checked ? '\n<strong>ПЕРЕЗВОНИТЬ</strong>\n' : ''}`;

export const sendMessageToBot = async (req, res) => {
  try {
    const message = getMessage(req.body);
    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?parse_mode=html`,
      null,
      {
        params: {
          chat_id: process.env.TELEGRAM_CHAT,
          text: message,
        },
      }
    );
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
