const mongoose = require("mongoose");
const db = mongoose.createConnection("mongodb://localhost");

db.on("open", () => console.log("Mongoose successfully connected..."));
db.on("error", (err) => console.log("Mongoose connection error", err));
const conn1 = db.useDb("Project-Jose", { useCache: true });

module.exports.database = conn1;
