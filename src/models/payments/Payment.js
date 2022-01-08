const { Schema } = require("mongoose");
const { database } = require("../../database");

const paymentSchema = new Schema(
  {
    id_user: { type: String, required: true },
    cardNumberT: { type: String, required: true },
    cardHolderT: { type: String, required: true },
    total: { type: Number, required: true },
    state: { type: String, required: true },
    fecha: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = database.model("Payments", paymentSchema);
