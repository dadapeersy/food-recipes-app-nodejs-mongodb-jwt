import mongoose from "mongoose";

interface INav extends mongoose.Document {
    name: string,
    url: string
}

export default INav;