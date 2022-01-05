const { Schema } = require("mongoose");
const { database } = require("../database");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    birth_date: { type: Date, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    estatura: { type: Number, required: true },
    peso: { type: Number, required: true },
    password: { type: String, required: true },
    rol: { type: Number, required: true },
    state: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = database.model("Users", userSchema);
