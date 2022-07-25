module.exports = {
  proxy: "localhost:3000", // указать адрес и порт, на котором запущено приложение
  // files: ["**/*.css", "**/*.pug", "**/*.js", "**/*.*"],
  files: ["./source/**/*.{html,htm,css,js,pug}"],
  ignore: ["node_modules"],
  reloadDelay: 5,
  ui: false,
  notify: false,
  port: 3003, // порт, на котором запустится Browsersync с приложением
};
