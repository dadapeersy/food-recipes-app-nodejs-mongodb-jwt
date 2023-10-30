import mongoose from "mongoose";

interface IFood extends mongoose.Document {
    name: string;
}

export default IFood;