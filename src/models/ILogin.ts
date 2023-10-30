import mongoose from "mongoose";

interface ILogin extends mongoose.Document {
    userName: string,
    password: string
}

export default ILogin;