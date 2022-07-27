import fs from 'fs';
import { join } from 'path';
import { __dirname } from '../utils/dirname.js';

const notFoundPage = join(__dirname, '../views/pageNotFound.html');
const mainPage = join(__dirname, '../../build/index.html');

export const sendMainPage = (_, res) => {
  const hasFile = fs.existsSync(mainPage);
  hasFile ? res.sendFile(mainPage) : res.status(404).sendFile(notFoundPage);
};

export const sendNotFoundPage = (_, res) => {
  res.status(404).sendFile(notFoundPage);
};
