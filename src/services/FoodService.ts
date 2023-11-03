import { Model } from "mongoose";
import DbService from "./DbService";
import IFood from "../models/IFood";
import { IFoodService } from "./IFoodService";

class FoodService extends DbService<IFood> implements IFoodService<IFood> {

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

    public async updateFoodCategory(id: number, payload: IFood): Promise<IFood | null> {
        try {
            return await this.put(id, payload);
        }
        catch (error) {
            throw error;
        }
    }

}

export default FoodService;
