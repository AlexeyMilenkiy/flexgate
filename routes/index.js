const express = require("express");
const router = express.Router();
const ctrlTelegram = require('../api/telegramMsg');


router.get("/", function (req, res) {
  res.send("indexа");
  res.render("index"); 
});

// router.get("/telegram", function (req, res) {
//   res.send("telegram");
//   console.log('/telegram req', req);
// });

router.post('/telegram', ctrlTelegram.sendMsg);


module.exports = router;
