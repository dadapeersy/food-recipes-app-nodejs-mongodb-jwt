import { Request, Response, NextFunction } from "express";
import helperUtil from "../utils/helper";
import ConfigResponse from "../models/ConfigResponse";

class Foodcontroller {

    static async getAllFoodsCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.errorMsg = "getting All Foods Category";
        configResponse.callback = global.Container.get('foodService').getAllFoodsCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async getFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.errorMsg = "getting Food Category";
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('foodService').getFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async deleteFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.errorMsg = "deleting Food Category";
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('foodService').deleteFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async addFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.errorMsg = "adding New Food Category";
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('foodService').addFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async getAllRecipesByFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.errorMsg = "getting All Recipes By Food Category";
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('foodService').getAllRecipesByFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async AddRecipeByFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.errorMsg = "adding New Recipe By Food Category";
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('foodService').addRecipeByFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

}

export default Foodcontroller;