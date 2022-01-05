const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use("/api", require("./routes/users.routes"))
app.use("/api/exercise", require("./routes/exercise/exercises.routes"));
app.use("/api/food", require("./routes/food/foods.routes"));


app.use("/api/exercises", require("./routes/exercise/exercises-user.routes"));
app.use("/api/foods", require("./routes/food/foods-user.routes"));



module.exports = app;
