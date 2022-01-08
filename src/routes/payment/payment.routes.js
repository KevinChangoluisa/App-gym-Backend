const { Router } = require("express");
const router = Router();

const UserPaymentCtrl = require("../../controllers/payment/paymen.controller");

router.post("/registerUserPayment", UserPaymentCtrl.createUserPayment);

router.get("/getStateUserPayment/:id", UserPaymentCtrl.getStatePaymentUser);

router.get("/getStateUserPaymentDetail/:id", UserPaymentCtrl.getStateUserPaymentDetail);

router.put("/updateStateUserPayment/:id", UserPaymentCtrl.updateStateUserPayment);



module.exports = router;
