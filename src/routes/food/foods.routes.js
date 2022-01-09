const { Router } = require("express");
const router = Router();

const foodCtrl = require("../../controllers/food/food.controller");

router.get("/all", foodCtrl.getFoods);

router.post("/addfood", foodCtrl.addFoods);

module.exports = router;
