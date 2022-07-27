import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { __dirname } from './utils/dirname.js';
import pagesRouter from './routes/pages.js';
import restRouter from './routes/rest.js';

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('../build'));
app.disable('x-powered-by');

app.use('/', pagesRouter);

app.use('/api/v1', restRouter);

app.use((_, __, next) => {
  next(createError(404));
});

app.use((err, req, res, _) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

export default app;
