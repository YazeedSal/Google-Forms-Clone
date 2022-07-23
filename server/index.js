const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("../server/routes/userRoutes.api")

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Database Up and running"));

app.use(express.static(path.join(__dirname, "../build")));
app.use(express.json());
app.use(cors())
app.use("/users/",userRouter)

app.listen(process.env.PORT, () => console.log(`Connected to the server `));
