const { Router } = require("express");
const router = Router();

const usersCtrl = require("../../controllers/user/users.controller");

router.post("/registerUser", usersCtrl.createUser);

router.post("/loginUser", usersCtrl.loginUser);

router.get("/getUsers", usersCtrl.getUsers);

router.get("/getUser/:id", usersCtrl.getUser);
router.get("/getUserRol/:id", usersCtrl.getUserRol);

router.put("/updateUser/:id", usersCtrl.updateUser);

router.put("/updateUserState/:id", usersCtrl.updateUserState);

router.get("/getUserState/:id", usersCtrl.getUserState);


module.exports = router;
