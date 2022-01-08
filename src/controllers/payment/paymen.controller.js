const UserPaymentCtrl = {};
const Payment = require("../../models/payments/Payment");
const User = require("../../models/user/User");

UserPaymentCtrl.createUserPayment = async (req, res) => {
  const verifyId = await User.findById(req.body["id_user"]);
  if (verifyId) {
    const newUserPayment = new Payment(req.body);
    newUserPayment.state = "sin verificar";
    newUserPayment.total = 29.99;
    var dt = new Date();
    newUserPayment.fecha = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    await newUserPayment.save();
    res.json({ status: 201, message: "Su pago ha sido registrado" });
  } else {
    res.json({
      status: 400,
      message: `El usuario no se encuentra registrado`,
    });
  }
};

UserPaymentCtrl.getStatePaymentUser = async (req, res) => {
  const state = await Payment.findOne({ id_user: req.params.id }).select([
    "state",
  ]);
  res.send(state);
};

UserPaymentCtrl.getStateUserPaymentDetail = async (req, res) => {
  const detail = await Payment.findOne({ id_user: req.params.id }).select([
    "cardNumberT",
    "fecha",
    "total",
    "state",
  ]);
  res.send(detail);
};

UserPaymentCtrl.updateStateUserPayment = async (req, res) => {
  const user = await Payment.findOneAndUpdate( req.params.id , req.body)
  if (user !== null) {
    res.json({
      status: 201,
      message: "Pago actualizado"
    });
  } else {
    res.json({
      status: 400,
      message:
        "Error al momento de actualziar, revise que los campos esten ingresados correctamente, o vuelva a intentarlo mas tarde",
    });
  }
};

module.exports = UserPaymentCtrl;
