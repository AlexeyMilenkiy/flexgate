const path = require("path");
const fs = require("fs");

const mainPage = path.join(__dirname, "../build/index.html");
const notFoundPage = path.join(__dirname, "../views/not-found.html");

module.exports = {
  sendMainPage: (_, res) => {
    const hasFile = fs.existsSync(mainPage);
    hasFile ? res.sendFile() : res.status(404).sendFile(notFoundPage);
  },
  sendNotFoundPage: (_, res) => {
    res.status(404).sendFile(notFoundPage);
  },
};
