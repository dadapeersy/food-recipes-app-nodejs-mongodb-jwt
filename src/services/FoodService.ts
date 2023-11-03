import { Model } from "mongoose";
import DbService from "./DbService";
import IFood from "../models/IFood";
import { IListService } from "./IListService";

class FoodService extends DbService<IFood> implements IListService<IFood> {

    constructor(model: Model<IFood>) {
        super(model)
    }

    public async getAllItems(): Promise<IFood[]> {
        try {
            return await this.getAll();
        }
        catch (error) {
            throw error;
        }
    }

    public async getItem(id: number): Promise<IFood | null> {
        try {
            return await this.getById(id);
        }
        catch (error) {
            throw error;
        }

    }

    public async addItem(payload: IFood): Promise<IFood> {
        try {
            return await this.post(payload);
        }
        catch (error) {
            throw error;
        }
    }

    public async updateItem(id: number, payload: IFood): Promise<IFood | null> {
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

}

export default FoodService;
