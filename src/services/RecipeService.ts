import { Model } from "mongoose";
import IRecipe from "../models/IRecipe";
import DbService from "./DbService";
import { IListService } from "./IListService";
import Page from "../models/Page";

class RecipeService extends DbService<IRecipe> implements IListService<IRecipe>{

    constructor(model: Model<IRecipe>) {
        super(model)
    }

    public async getAllItems(): Promise<IRecipe[]> {
        try {
            return await this.getAll();
        }
        catch (error) {
            throw error;
        }
    }

    public async getItem(id: number): Promise<IRecipe | null> {
        try {
            return await this.getById(id);
        }
        catch (error) {
            throw error;
        }
    }

    public async addItem(payload: IRecipe): Promise<IRecipe> {
        try {
            return await this.post(payload);
        }
        catch (error) {
            throw error;
        }
    }

    public async updateItem(id: number, payload: IRecipe): Promise<IRecipe | null> {
        try {
            return await this.put(id, payload);
        }
        catch (error) {
            throw error;
        }
    }

    public async deleteItem(id: number): Promise<string> {
        try {
            const deletedFood = await this.deleteById(id);
            return deletedFood!.name;
        }
        catch (error) {
            throw error;
        }
    }

    public async getItemsByCategoryPage(page: string, limit: string, itemId?: string): Promise<Page<IRecipe>> {
        try {
            return await this.getAllByPage(page, limit, itemId);
        }
        catch (error) {
            throw error;
        }
    }

    public async getItemsByCategory(id: string): Promise<IRecipe[]> {
        try {
            const getAllRecipes = await this.getAllItems();
            return getAllRecipes.filter((item: IRecipe) => item.categoryId === id);
        }
        catch (error) {
            throw error;
        }
    }

}

export default RecipeService;
