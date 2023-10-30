import { Model } from "mongoose";
import IRecipe from "../models/IRecipe";
import DbService from "./DbService";
import { IListService } from "./IListService";

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

    public async addItem(payload: IRecipe): Promise<IRecipe> {
        try {
            return await this.post(payload);
        }
        catch (error) {
            throw error;
        }
    }

}

export default RecipeService;
