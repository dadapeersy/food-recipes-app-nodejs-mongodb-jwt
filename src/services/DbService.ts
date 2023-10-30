import { Model } from "mongoose";

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