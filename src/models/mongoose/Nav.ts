import { Model, Schema, model } from 'mongoose';
import INav from '../INav';

// Nav Schema
const NavSchema = new Schema<INav>({
    name: { type: String, required: true },
    url: { type: String, required: true }
});

export const Nav: Model<INav> = model<INav>("Nav", NavSchema);