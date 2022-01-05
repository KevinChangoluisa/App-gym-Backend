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
        name: {
          0: "Press banca inclinado barra",
          1: "Aperturas en polea",
          3: "Press de pectorales",
        },
      },
      {
        type: "Espalda",
        name: {
          1: "Curl inclinado con mancuernas",
          2: "Dominas",
          3: "Jalon tras nuca, pull over",
        },
      },
      {
        type: "Pierna",
        name: {
          1: "Sentadillas",
          2: "Maquina eliptica",
          3: "Peso muerto con barra",
        },
      },
      {
        type: "Brazos",
        name: {
          1: "Press arnold",
          2: "Encogimientos con mancuernas",
          3: "Curl con barra",
        },
      },
      {
        type: "Abs",
        name: {
          1: "crunch manos al pecho",
          2: "Crunch inverso",
          3: "Elevacion de piernas",
          4: "Rodillas al pecho con fitball",
        },
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
