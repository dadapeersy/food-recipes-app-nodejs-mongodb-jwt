import { Model, Schema, model } from 'mongoose';
import IRecipe from '../IRecipe';

// Recipe Schema
const RecipeSchema = new Schema<IRecipe>({
    categoryId: { type: String, required: true },
    name: { type: String, required: true },
    urlImg: { type: String, required: true },
    instructions: { type: String, required: true }
});

export const Recipe: Model<IRecipe> = model<IRecipe>("Recipe", RecipeSchema);