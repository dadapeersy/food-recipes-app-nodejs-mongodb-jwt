import { Request, Response, NextFunction } from "express";
import helperUtil from "../utils/helper";
import ConfigResponse from "../models/ConfigResponse";

class Foodcontroller {

    static async getAllItems(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.callback = global.Container.get('foodService').getAllItems.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async getItem(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('foodService').getItem.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async addItem(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('foodService').addItem.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async updateItem(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('foodService').updateItem.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

    static async deleteItem(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.id = req.params.id;
        configResponse.callback = global.Container.get('foodService').deleteItem.bind(global.Container.get('foodService'));
        await helperUtil.processResponse(configResponse, res, next);
    }
}

export default Foodcontroller;