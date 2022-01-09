const { Router } = require("express");
const router = Router();

const exerciseCtrl = require("../../controllers/exercise/exercise.controller");

router.get("/all", exerciseCtrl.getExercises);
router.post("/addExercise", exerciseCtrl.addExercise);

module.exports = router;
