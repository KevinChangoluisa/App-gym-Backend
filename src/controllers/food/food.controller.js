const foodCtrl = {};
const Food = require("../../models/food/Food");

foodCtrl.getFoods = async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
};

foodCtrl.addFoods = async (req, res) => {
  const verifyType = await Food.findOne({ type: req.body["type"] });
  if (verifyType != null) {
    await Food.findOneAndUpdate(
      { type: req.body["type"] },
      { $push: { name: req.body["name"] } }
    );
  } else {
    const newFood = new Food(req.body);
    await newFood.save();
  }
  res.json({ status: 201, message: "Alimento añadido con exito" });
};

module.exports = foodCtrl;
