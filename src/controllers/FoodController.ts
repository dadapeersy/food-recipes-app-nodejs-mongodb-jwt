import { Request, Response, NextFunction } from "express";
import helperUtil from "../utils/helper";
import ConfigResponse from "../models/ConfigResponse";

class Foodcontroller {

    static async getAllFoodsCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.callback = global.Container.get('foodService').getAllFoodsCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async getFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('foodService').getFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async deleteFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('foodService').deleteFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async addFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('foodService').addFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async updateFoodCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('foodService').updateFoodCategory.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

}

export default Foodcontroller;