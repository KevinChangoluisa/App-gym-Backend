const foodCtrl = {};
const Food = require("../../models/food/Food");

foodCtrl.getFoods = async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
};

module.exports = foodCtrl;
