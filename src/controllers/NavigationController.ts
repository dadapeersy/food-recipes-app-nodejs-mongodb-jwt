import { Request, Response, NextFunction } from "express";
import helperUtil from "../utils/helper";
import ConfigResponse from "../models/ConfigResponse";

class NavigationController {

    static async getAllNavsCategory(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.errorMsg = "getting All Navs Category";
        configResponse.callback = global.Container.get('navigationService').getAllCategory.bind(global.Container.get('navigationService'));
        await helperUtil.processResponse(configResponse, res, next);
    }

}

export default NavigationController;