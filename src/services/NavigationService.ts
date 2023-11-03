import { Model } from "mongoose";
import INav from "../models/INav";
import DbService from "./DbService";
import { IListService } from "./IListService";

class NavigationService extends DbService<INav> implements IListService<INav> {

    constructor(model: Model<INav>) {
        super(model)
    }

    public async getAllItems(): Promise<INav[]> {
        try {
            return await this.getAll();
        }
        catch (error) {
            throw error;
        }
    }

    public async addItem(payload: INav): Promise<INav> {
        try {
            return await this.post(payload);
        }
        catch (error) {
            throw error;
        }
    }

    public async getItem(id: number): Promise<INav | null> {
        try {
            return await this.getById(id);
        }
        catch (error) {
            throw error;
        }
    }

    public async updateItem(id: number, payload: INav): Promise<INav | null> {
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

export default NavigationService;
