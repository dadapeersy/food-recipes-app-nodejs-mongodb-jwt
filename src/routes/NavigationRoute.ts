import express from 'express';
import NavigationController from '../controllers/NavigationController';
const router = express.Router();

router.get('/', NavigationController.getAllItems);

export default router;
