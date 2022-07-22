const ctrlTelegram = require('../api/telegram_msg');
router.post('/telegram', ctrlTelegram.sendMsg);