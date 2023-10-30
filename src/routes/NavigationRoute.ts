import express from 'express';
import NavigationController from '../controllers/NavigationController';
const router = express.Router();

router.get('/', NavigationController.getAllNavsCategory);

export default router;
