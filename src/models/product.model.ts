import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  quantity: number;
  price: number;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>("Product", ProductSchema);
export default Product;
