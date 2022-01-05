const { Router } = require("express");
const router = Router();

const exerciseUserCtrl = require("../../controllers/exercise/exercise-user.controller");

router.post("/addExercise", exerciseUserCtrl.createExerciseXuser);

router.get("/getExercisesUser/:id", exerciseUserCtrl.getAllExerciseXuser);

router.delete("/:id", exerciseUserCtrl.deleteExerciseXuser);


module.exports = router;

