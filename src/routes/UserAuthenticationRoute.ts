import express from 'express';
import UserAuthenticationController from '../controllers/UserAuthenticationController';
const router = express.Router();

router.post('/login', UserAuthenticationController.login);

export default router;
