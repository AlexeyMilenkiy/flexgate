import express from 'express';
import { sendMainPage, sendNotFoundPage } from '../controllers/pages.js';

const router = express.Router();

router.get('/', sendMainPage);

router.get('*', sendNotFoundPage);

export default router;
