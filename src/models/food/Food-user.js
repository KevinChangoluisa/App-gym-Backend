const { Schema } = require("mongoose");
const { database } = require("../../database");

const foodUserSchema = new Schema(
  {
    id_User: { type: String, required: true },
    day: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unity: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = database.model("Food-User", foodUserSchema);
