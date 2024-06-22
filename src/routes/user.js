const express = require("express");
const {
  postUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/users", postUser);
router.get("/users", getAllUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
