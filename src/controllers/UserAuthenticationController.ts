import { Request, Response, NextFunction } from "express";
import helperUtil from "../utils/helper";
import ConfigResponse from "../models/ConfigResponse";

class UserAuthenticationController {

    static async login(req: Request, res: Response, next: NextFunction) {
        const configResponse = new ConfigResponse();
        configResponse.errorMsg = "login";
        configResponse.body = req.body;
        configResponse.callback = global.Container.get('userAuthenticationService').login.bind(global.Container.get('userAuthenticationService'));
        await helperUtil.processResponse(configResponse, res, next);
    }
}

export default UserAuthenticationController;