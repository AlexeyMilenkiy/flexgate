const router = require("express").Router();
const { sendMessageToBot } = require("../controllers/rest");

/* Обрабатываем запрос с клиента по урлу /api/v1/sendForm */
router.post("/sendForm", sendMessageToBot);

module.exports = router;
