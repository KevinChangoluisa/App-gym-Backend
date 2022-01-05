const { Router } = require("express");
const router = Router();

const foodCtrl = require("../../controllers/food/food.controller");

router.get("/all", foodCtrl.getFoods);

module.exports = router;
