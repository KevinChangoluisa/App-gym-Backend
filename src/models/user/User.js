const { Schema } = require("mongoose");
const { database } = require("../../database");
let bcrypt = require("bcrypt");

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
    enfermedad: { type: String, required: true },
    detalleEnfermedad: { type: String, required: true },
    password: { type: String, required: true },
    rol: { type: Number, required: true },
    state: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const person = database.model("Users", userSchema);
module.exports = person;

createAdmin = async (req, res) => {
  const users = await person.find();
  var size = users.length;
  if (size == 0) {
    const userAdmin = new person({
      name: "admin",
      lastname: "admin",
      email: "admin2022@admin2022.com",
      birth_date: "2022-01-01",
      phone: "0999999999",
      gender: " ",
      estatura: 0,
      peso: 0,
      enfermedad: " ",
      detalleEnfermedad:" ",
      password: await bcrypt.hash("admin2022.com", 10),
      rol: 555,
      state: "activo",
    });
    const Admin = new person(userAdmin);
    Admin.save();
  }
};
createAdmin();
