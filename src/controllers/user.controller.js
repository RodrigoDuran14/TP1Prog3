const userSchema = require("../models/user");

const postUser = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;

    const newUser = new userSchema({ name, age, email, password });

    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const allUser = await userSchema.find();

    res.send(allUser);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userSchema.findById({ _id: id });

    !user ? res.status(404).send() : res.send(user);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const userUpdate = await userSchema.findByIdAndUpdate(id, { $set: body });

    !userUpdate
      ? res.status(404).send({ error: "usuario no encontrado" })
      : res.send(body);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await userSchema.deleteOne({ _id: id });

    res.send(deleted);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postUser, getAllUser, getUserById, updateUser, deleteUser };
