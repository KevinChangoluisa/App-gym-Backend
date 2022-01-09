const exerciseCtrl = {};
const Exercise = require("../../models/exercise/Exercise");

exerciseCtrl.getExercises = async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
};


exerciseCtrl.addExercise = async (req, res) => {
  const verifyType = await Exercise.findOne({ type: req.body["type"] });
  if (verifyType != null) {
    await Exercise.findOneAndUpdate(
      { type: req.body["type"] },
      { $push: { name: req.body["name"] } }
    );
  } else {
    const newExercise = new Exercise(req.body);
    await newExercise.save();
  }
  res.json({ status: 201, message: "Ejercicio añadido con exito" });
};


module.exports = exerciseCtrl;
