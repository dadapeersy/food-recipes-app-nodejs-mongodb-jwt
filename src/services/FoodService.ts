import { Model } from "mongoose";
import DbService from "./DbService";
import IFood from "../models/IFood";
import IRecipe from "../models/IRecipe";
import { IFoodService } from "./IFoodService";
import RecipeService from "./RecipeService";
import Page from "../models/Page";

class FoodService extends DbService<IFood> implements IFoodService<IFood, IRecipe> {

    private _recipeService!: RecipeService;

    constructor(model: Model<IFood>, recipeService: RecipeService) {
        super(model)
        this.recipeService = recipeService;
    }

    /**
     * Getter recipeService
     * @return {RecipeService}
     */
    private get recipeService(): RecipeService {
        return this._recipeService;
    }

    /**
     * Setter recipeService
     * @param {RecipeService} value
     */
    private set recipeService(value: RecipeService) {
        this._recipeService = value;
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
            const getAllRecipes = await this.recipeService.getAllItems();
            return getAllRecipes.filter((item: IRecipe) => item.categoryId === id);
        }
        catch (error) {
            throw error;
        }
    }

    public async getRecipesByFoodPage(page: string, limit: string, id?: string): Promise<Page<IRecipe>> {
        try {
            return await this.recipeService.getItemsByPage(page, limit, id);
        }
        catch (error) {
            throw error;
        }
    }

    public async addRecipeByFoodCategory(payload: IRecipe): Promise<IRecipe> {
        try {
            return await this.recipeService.addItem(payload);
        }
        catch (error) {
            throw error;
        }
    }

}

export default FoodService;
