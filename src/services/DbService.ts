import { Model, UpdateQuery } from "mongoose";
import Page from "../models/Page";

abstract class DbService<Type> {
    private _model!: Model<Type>;

    constructor(model: Model<Type>) {
        this.model = model;
    }

    /**
     * Getter model
     * @return {Model<Type>}
     */
    private get model(): Model<Type> {
        return this._model;
    }

    /**
     * Setter model
     * @param {Model<Type>} value
     */
    private set model(value: Model<Type>) {
        this._model = value;
    }

    protected async getAll(): Promise<Type[]> {
        try {
            return await this.model.find();
        }
        catch (error) {
            throw error;
        }

    }

    protected async getAllByPage(page: string, limit: string, itemId?: string): Promise<Page<Type>> {
        try {
            const filterObj: any = {};

            const limitRows: number = limit !== undefined ? (limit as unknown as number) : 0;
            let pageId: number = (page as unknown as number);

            if (itemId !== undefined) {
                filterObj['categoryId'] = itemId;
            }

            if (limitRows === 0) {
                pageId = 1;
            }

            // get total documents in the items collection 
            const count = await this.model.find(filterObj).count();

            // execute query with page and limit values
            const items = await this.model.find(filterObj)
                .limit(limitRows * 1)
                .skip((pageId - 1) * limitRows)
                .exec()

            const result = new Page<Type>();
            result.items = items;
            result.totalPages = limitRows !== 0 ? Math.ceil(count / limitRows) : 1;
            result.currentPage = pageId;

            return result;
        }
        catch (error) {
            throw error;
        }
    }

    protected async getById(id: number): Promise<Type | null> {
        try {
            return await this.model.findById(id);
        }
        catch (error) {
            throw error;
        }
    }

    protected async getByAttribute(payload: any): Promise<Type | null> {
        try {
            return await this.model.findOne(payload);
        }
        catch (error) {
            throw error;
        }
    }

    protected async post(payload: Type): Promise<Type> {
        const data = new this.model(payload);
        try {
            return (await data.save()).toObject();
        }
        catch (error) {
            throw error;
        }
    }

    protected async put(id: number, payload: UpdateQuery<Type>): Promise<Type | null> {
        try {
            return await this.model.findByIdAndUpdate(id, payload, { new: true });
        }
        catch (error) {
            throw error;
        }
    }

    protected async deleteById(id: number): Promise<Type | null> {
        try {
            return await this.model.findByIdAndDelete(id);
        }
        catch (error) {
            throw error;
        }
    }

    // fake fetch only for test
    protected async fakeFetch(val: any): Promise<any> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(val), 250);
        });
    }
}

export default DbService;