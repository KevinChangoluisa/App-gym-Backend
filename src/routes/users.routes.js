const { Router } = require("express");
const router = Router();

const usersCtrl = require("../controllers/users.controller");

router.post("/registerUser", usersCtrl.createUser);

router.post("/loginUser", usersCtrl.loginUser);

router.get("/getUsers", usersCtrl.getUsers);

router.get("/getUser/:id", usersCtrl.getUser);
router.get("/getUserRol/:id", usersCtrl.getUserRol);

router.put("/updateUser/:id", usersCtrl.updateUser);

router.put("/updateUserState/:id", usersCtrl.updateUserState);

router.get("/getUserState/:id", usersCtrl.getUserState);

/*
router.get("/", usersCtrl.getUsers);

router.get("/:id", usersCtrl.getEmployee);

router.put("/:id", usersCtrl.updateEmployee);

router.delete("/:id", usersCtrl.deleteEmployee);
*/
module.exports = router;
