import express from 'express';
import FoodController from '../controllers/FoodController';
const router = express.Router();

/** Foods Http request */
router.get('/', FoodController.getAllFoodsCategory);
router.post('/', FoodController.addFoodCategory);
router.delete('/:id', FoodController.deleteFoodCategory);

/** Recipes Http request */
router.get('/:id/recipes', FoodController.getAllRecipesByFoodCategory);
router.post('/:id/recipes', FoodController.AddRecipeByFoodCategory);

export default router;