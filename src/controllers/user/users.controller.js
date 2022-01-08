const userCtrl = {};
const User = require("../../models/user/User");
const jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

userCtrl.createUser = async (req, res) => {
  const verifyEmail = await User.findOne({ email: req.body["email"] });
  if (verifyEmail) {
    res.json({
      status: 400,
      message: `El usuario ya se encuentra registrado con el email: ${req.body["email"]}`,
    });
  } else {
    req.body["password"] = await bcrypt.hash(req.body["password"], 10);
    const newUser = new User(req.body);
    if (newUser.rol == null) {
      newUser.rol = 333;
      newUser.state = "inactivo";
    }
    await newUser.save();
    const token = jwt.sign({ _id: newUser._id }, "secretkey");
    res.json({ status: 201, message: "Usuario añadido con exito", token });
  }
};

userCtrl.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      status: 401,
      message: `El email no se encuentra registrado ${req.body["email"]}`,
    });
  }

  let comparePasswords = await bcrypt.compare(password, user.password);
  if (comparePasswords) {
    const token = jwt.sign({ _id: user._id }, "secretkey");

    res.json({ status: 200, user_id: user._id, rol: user.rol, token });
  } else {
    return res.json({
      status: 401,
      message: "Usuario o contraseña incorrectos",
    });
  }
};

userCtrl.getUsers = async (req, res) => {
  const user = await User.find({ rol: 333 }).select("name lastname state");
  res.json(user);
};

userCtrl.getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select([
    "-password",
    "-rol",
    "-createdAt",
    "-updatedAt",
  ]);
  res.send(user);
};

userCtrl.getUserRol = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select(["rol"]);
  res.send(user);
};

userCtrl.updateUser = async (req, res) => {
  req.body["password"] = await bcrypt.hash(req.body["password"], 10);
  const estatus = await User.findByIdAndUpdate(req.params.id, req.body);
  if (estatus !== null) {
    const token = jwt.sign({ _id: User._id }, "secretkey");
    res.json({
      status: 201,
      message: "Datos actualizados satisfactoriamente",
      token,
    });
  } else {
    res.json({
      status: 400,
      message:
        "Error al momento de actualziar, revise que los campos esten ingresados correctamente, o vuelva a intentarlo mas tarde",
    });
  }
};

userCtrl.updateUserState = async (req, res) => {

  const estatus = await User.findByIdAndUpdate(req.params.id, req.body);

  if (estatus !== null) {
    res.json({
      status: 201,
      message: "Datos actualizados satisfactoriamente"
    });
  } else {
    res.json({
      status: 400,
      message:
        "Error al momento de actualziar, revise que los campos esten ingresados correctamente, o vuelva a intentarlo mas tarde",
    });
  }

};

userCtrl.getUserState = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select([
    "state"
  ]);
  res.send(user);
}

module.exports = userCtrl;
