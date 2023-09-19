const { Router } = require("express");
const router = new Router();

const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  listUsers,
} = require("./user");

router.post("/user", createUser);

router.patch("/user", updateUser);

router.delete("/user/:uid", deleteUser);

router.get("/user", getUser);

router.get("/users", listUsers);

module.exports = router;
