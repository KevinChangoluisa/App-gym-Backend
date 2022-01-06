const { Router } = require("express");
const router = Router();

const foodUserCtrl = require("../../controllers/food/food-user.controller");

router.post("/addfood", foodUserCtrl.createFoodXuser);

router.get("/getFoodsUser/:id", foodUserCtrl.getAllFoodXuser);

router.delete("/:id", foodUserCtrl.deleteFoodXuser);

router.put("/updateFoodXuser/:id", foodUserCtrl.updateFoodXuser);



module.exports = router;

