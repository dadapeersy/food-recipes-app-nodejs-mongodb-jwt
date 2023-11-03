
import { Response, NextFunction } from "express";
import ConfigResponse from "../models/ConfigResponse";


class helperUtil {

    static getErrorMessage(error: unknown): string {
        if (error instanceof Error) return error.message;
        return String(error);
    }

    static async processResponse(config: ConfigResponse, res: Response, next: NextFunction) {
        try {
            if (config.id === undefined && config.body === undefined) {
                res.status(200).send(await config.callback());
            } else if (config.id !== undefined && config.body !== undefined) {
                res.status(200).send(await config.callback(config.id, config.body));
            } else if (config.id === undefined && config.body !== undefined) {
                res.status(200).send(await config.callback(config.body));
            } else if (config.id !== undefined && config.body === undefined) {
                if (config.page !== undefined && config.limit !== undefined) {
                    res.status(200).send(await config.callback(config.page, config.limit, config.id));
                } else {
                    res.status(200).send(await config.callback(config.id));
                }
            }

            next();
        } catch (error) {
            next(error)
        }
    }

}

export default helperUtil;