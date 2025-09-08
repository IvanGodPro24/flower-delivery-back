import { model, Schema } from 'mongoose';

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Shop = model('Shop', shopSchema);
