const foodUserCtrl = {};
const FoodUser = require("../../models/food/Food-user");

foodUserCtrl.createFoodXuser = async (req, res) => {
  const newFood = new FoodUser(req.body);
  await newFood.save();
  res.json({ status: 201, message: "Alimentacion añadida con exito" });
};

foodUserCtrl.getAllFoodXuser = async (req, res) => {
  const user = await FoodUser.find({ id_User: req.params.id }).select([
    "-createdAt",
    "-updatedAt",
  ]);
  res.send(user);
};

foodUserCtrl.deleteFoodXuser = async (req, res) => {
  await FoodUser.findByIdAndDelete(req.params.id);
  res.json({ status: 200, message: "Alimentacion eliminada con exito" });
};

module.exports = foodUserCtrl;
