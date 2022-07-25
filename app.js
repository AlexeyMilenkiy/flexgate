var express = require('express');

var indexRouter = require('./routes/index');
var app = express();

const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

 
app.use('/', indexRouter);
app.use('/telegram', indexRouter);
 
app.listen(3000);




// const hostname = "127.0.0.1";
// const port = 3000;

// const path = require('path');
// const express = require("express");
// const app = express();

// const router = require('./routes/router');
// app.use('/', router);

// // app.set('views', './source')
// // app.set('view engine', 'pug')

// app.use(express.static(path.join(__dirname, 'public')));
// // app.get('/', (req, res) => {
// //   res.send('Hello Worlllld!')
// //   res.render('index');

// // })



// // app.get('/', function (req, res) {
// //   res.render('index', { 
// //     title: 'Hey', 
// //     message: 'Hello there!'});
// // });


// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
