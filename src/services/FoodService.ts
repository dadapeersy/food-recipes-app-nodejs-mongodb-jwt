import { Model } from "mongoose";
import DbService from "./DbService";
import IFood from "../models/IFood";
import IRecipe from "../models/IRecipe";
import { IFoodService } from "./IFoodService";

class FoodService extends DbService<IFood> implements IFoodService<IFood, IRecipe> {

    constructor(model: Model<IFood>) {
        super(model)
    }

    public async getAllFoodsCategory(): Promise<IFood[]> {
        try {
            return await this.getAll();
        }
        catch (error) {
            throw error;
        }
    }

    public async getFoodCategory(id: number): Promise<IFood | null> {
        try {
            return await this.getById(id);
        }
        catch (error) {
            throw error;
        }

    }

    public async deleteFoodCategory(id: number): Promise<string> {
        try {
            const deletedFood = await this.deleteById(id);
            return deletedFood!.name;
        }
        catch (error) {
            throw error;
        }
    }

    public async addFoodCategory(payload: IFood): Promise<IFood> {
        try {
            return await this.post(payload);
        }
        catch (error) {
            throw error;
        }
    }

    public async getAllRecipesByFoodCategory(id: string): Promise<IRecipe[]> {
        try {
            // need to paging
            const getAllRecipes = await global.Container.get('recipeService').getAllItems();
            return getAllRecipes.filter((item: IRecipe) => item.categoryId === id);
        }
        catch (error) {
            throw error;
        }
    }

    public async addRecipeByFoodCategory(payload: IRecipe): Promise<IRecipe> {
        try {
            return await global.Container.get('recipeService').addItem(payload);
        }
        catch (error) {
            throw error;
        }
    }

}

export default FoodService;
