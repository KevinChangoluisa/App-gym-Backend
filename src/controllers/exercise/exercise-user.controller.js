const exerciseUserCtrl = {};
const ExerciseUser = require("../../models/exercise/Exercise-user");

exerciseUserCtrl.createExerciseXuser = async (req, res) => {
  const newExercise = new ExerciseUser(req.body);
  console.log(req.body);
  await newExercise.save();
  res.json({ status: 201, message: "Ejercicio añadido con exito" });
};

exerciseUserCtrl.getAllExerciseXuser = async (req, res) => {
  const user = await ExerciseUser.find({ id_User: req.params.id }).select([
    "-createdAt",
    "-updatedAt",
  ]);
  res.send(user);
};

exerciseUserCtrl.deleteExerciseXuser = async (req, res) => {
  await ExerciseUser.findByIdAndDelete(req.params.id);
  res.json({ status: 200, message: "Ejercicio eliminado con exito" });
};

exerciseUserCtrl.updateExerciseXuser = async (req, res) => {

  const estatus = await ExerciseUser.findByIdAndUpdate(req.params.id,req.body)
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
module.exports = exerciseUserCtrl;

