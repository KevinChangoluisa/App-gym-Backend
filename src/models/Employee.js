const { Schema, model } = require("mongoose");

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    position: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Employee", employeeSchema);
