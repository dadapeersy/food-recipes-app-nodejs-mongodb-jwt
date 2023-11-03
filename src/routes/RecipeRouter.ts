import express from 'express';
import RecipeController from '../controllers/RecipeController';
const router = express.Router();

/** Recipes Http request */
router.get('/food/:id', RecipeController.getItemsByCategoryPage);
router.post('/', RecipeController.addItem);
router.get('/:id', RecipeController.getItem);
router.put('/:id', RecipeController.updateItem);
router.delete('/:id', RecipeController.deleteItem);

export default router;