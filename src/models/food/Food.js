const { Schema } = require("mongoose");
const { database } = require("../../database");

const foodSchema = new Schema(
  {
    type: { type: String, required: true },
    name: { type: Array, default: [], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const col = database.model("Foods", foodSchema);
module.exports = col;

createFoods = async (req, res) => {
  const foods = await col.find();
  var size = foods.length;
  if (size == 0) {
    const comidas = [
      {
        type: "Cereales",
        name: [
          "Pasta",
          "Arroz blanco",
          "Arroz integral",
          "Pan integral",
          "Avena",
          "Cebada",
        ],
      },
      {
        type: "Lacteos",
        name: ["Leche", "Yogurt griego", "Queso", "Leche en polvo"],
      },
      {
        type: "Frutas",
        name: [
          "Manzana",
          "Durazno",
          "Naranaja",
          "Sandia",
          "Mango",
          "Limon",
          "Mora",
          "Banana",
          "Kiwi",
        ],
      },
      {
        type: "Verduras",
        name: [
          "Espinaca",
          "Pepino",
          "Brocoli",
          "Lechuga",
          "Tomate",
          "Esparragos",
          "Coliflor",
          "Apio",
          "Pimientos",
          "Zanohorias",
          "Acelga",
        ],
      },
      {
        type: "Carnes y Huevos",
        name: [
          "Bistec de Res",
          "Pechuga de Pollo",
          "Atun",
          "Huevos",
          "Pescado blanco",
          "Jamon de pavo",
        ],
      },
    ];
    const momentoComida = comidas.map(function (comida) {
      const obj = new col(comida);
      obj.save();
    });

    momentoComida;
  }
};
createFoods();
