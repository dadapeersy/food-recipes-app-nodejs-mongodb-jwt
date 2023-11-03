import express from 'express';
import FoodController from '../controllers/FoodController';
const router = express.Router();

/** Foods Http request */
router.get('/', FoodController.getAllFoodsCategory);
router.post('/', FoodController.addFoodCategory);
router.get('/:id', FoodController.getFoodCategory);
router.put('/:id', FoodController.updateFoodCategory);
router.delete('/:id', FoodController.deleteFoodCategory);

export default router;