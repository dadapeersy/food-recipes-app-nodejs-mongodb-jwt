import express from 'express';
import FoodController from '../controllers/FoodController';
const router = express.Router();

/** Foods Http request */
router.get('/', FoodController.getAllItems);
router.get('/:id', FoodController.getItem);
router.post('/', FoodController.addItem);
router.put('/:id', FoodController.updateItem);
router.delete('/:id', FoodController.deleteItem);

export default router;