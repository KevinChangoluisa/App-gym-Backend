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
        name: {
          0: "Pasta",
          1: "Arroz blanco",
          3: "Arroz integral",
          4: "Pan integral",
          5: "Avena",
          6: "Cebada",
        },
      },
      {
        type: "Lacteos",
        name: {
          1: "Leche",
          2: "Yogurt griego",
          3: "Queso",
          4: "Leche en polvo",
        },
      },
      {
        type: "Frutas",
        name: {
          1: "Manzana",
          2: "Durazno",
          3: "Naranaja",
          4: "Sandia",
          5: "Mango",
          6: "Limon",
          7: "Mora",
          8: "Banana",
          9: "Kiwi",
        },
      },
      {
        type: "Verduras",
        name: {
          1: "Espinaca",
          2: "Pepino",
          3: "Brocoli",
          4: "Lechuga",
          5: "Tomate",
          6: "Esparragos",
          7: "Coliflor",
          8: "Apio",
          9: "Pimientos",
          10: "Zanohorias",
          11: "Acelga",
        },
      },
      {
        type: "Carnes y Huevos",
        name: {
          1: "Bistec de Res",
          2: "Pechuga de Pollo",
          3: "Atun",
          4: "Huevos",
          5: "Pescado blanco",
          6: "Jamon de pavo",
        },
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
