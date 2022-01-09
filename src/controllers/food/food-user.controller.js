const foodUserCtrl = {};
const FoodUser = require("../../models/food/Food-user");

foodUserCtrl.createFoodXuser = async (req, res) => {
  console.log(req.body);
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

foodUserCtrl.updateFoodXuser = async (req, res) => {

  const estatus = await FoodUser.findByIdAndUpdate(req.params.id,req.body)
  if (estatus !== null) {
    res.json({
      status: 201,
      message: "Datos actualizados satisfactoriamente"
    });
  } else {
    res.json({
      status: 400,
      message:
        "Error al momento de actualziar, revise que los campos esten ingresados correctamente, o vuelva a intentarlo mas tarde",
    });
  }

};
module.exports = foodUserCtrl;
