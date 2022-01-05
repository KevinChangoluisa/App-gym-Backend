const exerciseCtrl = {};
const Exercise = require("../../models/exercise/Exercise");

exerciseCtrl.getExercises = async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
};


module.exports = exerciseCtrl;
