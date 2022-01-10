const { Schema } = require("mongoose");
const { database } = require("../../database");

const exerciseUserSchema = new Schema(
  {
    id_User: { type: String, required: true },
    day: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    repetition: { type: Number, required: true },
    series: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = database.model("Exercise-User", exerciseUserSchema);
