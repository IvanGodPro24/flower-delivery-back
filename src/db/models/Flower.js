import { model, Schema } from 'mongoose';

const flowerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Flower = model('Flower', flowerSchema);
