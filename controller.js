import User from "./model.js";

export const getUser = async (req, res) => {
  try {
    let allUsers = await User.find();
    res.status(200).json({
      message: "list of all user",
      data: allUsers,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postUser = async (req, res) => {
  try {
    let user = req.body;
    let newUser = await User.create(user);
    res.status(201).json({
      message: "New user created..",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    let userData = await User.findById(req.params.id);
    userData.username = req.body.username;
    const updatedData = await userData.save();
    res.status(200).json({
      message: "user data is update successfully",
      data: updatedData,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("user not exist.");
    await User.findByIdAndDelete(req.params.id);
    res.status(208).json({
      message: " User deleted sucessfully",
    });
  } catch (err) {}
};
