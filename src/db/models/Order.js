import { model, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    products: [
      {
        flowerId: {
          type: Schema.Types.ObjectId,
          ref: 'Flower',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    isFinalized: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Order = model('Order', orderSchema);
