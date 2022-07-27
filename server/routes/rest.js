import express from 'express';
const router = express.Router();
import { sendMessageToBot } from '../controllers/rest.js';

router.post('/sendForm', sendMessageToBot);

export default router;
