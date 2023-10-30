import { Model } from "mongoose";
import ILogin from "../models/ILogin";
import DbService from "./DbService";
import User from "../models/User";
import { IAuthenticationService } from "./IAuthenticationService";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserAuthenticationService extends DbService<ILogin> implements IAuthenticationService<ILogin, User> {

    constructor(model: Model<ILogin>) {
        super(model)
    }

    public async login(payload: ILogin): Promise<User> {
        try {
            const foundUser = await this.getByAttribute({ userName: payload.userName });

            if (!foundUser) {
                throw new Error('Name of user is not correct');
            }
            const isMatch = bcrypt.compareSync(payload.password, foundUser.password);

            if (isMatch) {
                const token = jwt.sign({ _id: foundUser._id?.toString(), name: foundUser.userName }, (process.env.JWT_SECRET as string), {
                    expiresIn: '1 days',
                });

                const user = new User();
                user.name = foundUser?.userName;
                user.token = token;
                return user;
            } else {
                throw new Error('Password is not correct');
            }
        }
        catch (error) {
            throw error;
        }
    }

}

export default UserAuthenticationService;
