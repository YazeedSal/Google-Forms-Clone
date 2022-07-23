const User = require("../models/users.model");

const router = require("express").Router();

router.get("/", async function (req, res) {
  try {
    const usersFromDb = await User.find({});
    res.send(usersFromDb);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/", async function (req, res) {
  const newUser = req.body;
  const dbUser = new User(newUser);
  try {
    const dbRes = await dbUser.save();
    res.send(dbUser);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router
