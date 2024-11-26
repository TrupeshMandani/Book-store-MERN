const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      zip: {
        type: String, // Adjusted to match the frontend payload
        required: true,
      },
    },
    phone: {
      type: String, // Changed from `Number` to `String` to allow flexible input
      required: true,
    },
    productsIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

// The code snippet defines a Mongoose schema for an order in a Node.js application. The schema includes fields for the customer's name, email, address, phone number, product IDs, total price, and timestamps. The schema also specifies the required fields and data types for each field. The `productsIds` field is an array of `ObjectId` references to the `Product` model. The `timestamps` option is set to `true` to automatically add `createdAt` and `updatedAt` fields to the documents. Finally, the schema is exported as the `Order` model.
