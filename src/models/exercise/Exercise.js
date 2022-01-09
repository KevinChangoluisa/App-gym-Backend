const { Schema } = require("mongoose");
const { database } = require("../../database");

const exerciseSchema = new Schema(
  {
    type: { type: String, required: true },
    name: { type: Array, default: [], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const col = database.model("Exercises", exerciseSchema);
module.exports = col;

createExercises = async (req, res) => {
  const exercises = await col.find();
  var size = exercises.length;
  if (size == 0) {
    const ejercicios = [
      {
        type: "Pecho",
        name: [
          "Press banca inclinado barra",
          "Aperturas en polea",
          "Press de pectorales",
        ],
      },
      {
        type: "Espalda",
        name: [
          "Curl inclinado con mancuernas",
          "Dominas",
          "Jalon tras nuca, pull over",
        ],
      },
      {
        type: "Pierna",
        name: ["Sentadillas", "Maquina eliptica", "Peso muerto con barra"],
      },
      {
        type: "Brazos",
        name: [
          "Press arnold",
          "Encogimientos con mancuernas",
          "Curl con barra",
        ],
      },
      {
        type: "Abs",
        name: [
          "crunch manos al pecho",
          "Crunch inverso",
          "Elevacion de piernas",
          "Rodillas al pecho con fitball",
        ],
      },
    ];
    const momentoComida = ejercicios.map(function (ejercicio) {
      const obj = new col(ejercicio);
      obj.save();
    });

    momentoComida;
  }
};
createExercises();
