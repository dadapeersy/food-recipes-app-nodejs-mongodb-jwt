import mongoose from "mongoose";

interface IRecipe extends mongoose.Document {
    categoryId: string;
    name: string;
    urlImg: string;
    instructions: string;
}

export default IRecipe;