const router = require("express").Router();
const { sendMainPage, sendNotFoundPage } = require("../controllers/pages");

/* Получаем основную страницу */
router.get("/", sendMainPage);

router.get("*", sendNotFoundPage);

module.exports = router;
