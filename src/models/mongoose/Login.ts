import { Model, Schema, model } from 'mongoose';
import ILogin from '../ILogin';
import bcrypt from 'bcrypt';

const saltRounds = 8

// Login Schema
const LoginSchema = new Schema<ILogin>({
    userName: { type: String, required: true },
    password: { type: String, required: true }
});

LoginSchema.pre('save', async function (next) {
    const login = this;
    if (login.isModified('password')) {
        login.password = await bcrypt.hash(login.password, saltRounds);
    }
    next();
});

export const Login: Model<ILogin> = model<ILogin>("Login", LoginSchema);