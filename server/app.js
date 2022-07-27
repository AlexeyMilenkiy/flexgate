import createError from 'http-errors';
import express from 'express';
import { join } from 'path';
import logger from 'morgan';
import cors from 'cors';
import { __dirname } from './utils/dirname.js';
import pagesRouter from './routes/pages.js';
import restRouter from './routes/rest.js';

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '../build')));

app.use('/', pagesRouter);

app.use('/api/v1', restRouter);

app.use(function (_, __, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, _) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
