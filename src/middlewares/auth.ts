import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.path !== '/api/user/login' && req.path !== '/api/navigation/') {
            const token = req.header('Authorization')?.replace('Bearer ', '');

            if (!token) {
                throw new Error('Please authenticate');
            }

            const decoded = jwt.verify(token, (process.env.JWT_SECRET as string));
            (req as CustomRequest).token = decoded;
        }

        next();
    } catch (error) {
        next(error);
    }
};