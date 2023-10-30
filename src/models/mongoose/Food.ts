import { Model, Schema, model } from 'mongoose';
import IFood from '../IFood';

// Food Schema
const FoodSchema = new Schema<IFood>({
  name: { type: String, required: true }
});

export const Food: Model<IFood> = model<IFood>("Food", FoodSchema);