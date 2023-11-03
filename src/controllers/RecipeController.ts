import { Request, Response, NextFunction } from "express";
import helperUtil from "../utils/helper";
import ConfigResponse from "../models/ConfigResponse";

class RecipeController {

    static async getItemsByCategoryPage(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        if (req.query.page !== undefined) {
            configResponse.page = req.query.page.toString();
        }
        if (req.query.limit !== undefined) {
            configResponse.limit = req.query.limit.toString();
        }
        configResponse.callback = global.Container.get('recipeService').getItemsByCategoryPage.bind(global.Container.get('recipeService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async getItem(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('recipeService').getItem.bind(global.Container.get('recipeService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async addItem(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('recipeService').addItem.bind(global.Container.get('recipeService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async updateItem(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('recipeService').updateItem.bind(global.Container.get('recipeService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async deleteItem(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('recipeService').deleteItem.bind(global.Container.get('recipeService'));
        await helperUtil.processResponse(configResponse, res, next);
    }
}

export default RecipeController;