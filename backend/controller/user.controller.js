import User from "../model/auth.model.js";

export const getUsers = async (req, res) => {
  try {
    const senderId = req.user._id;
    const users = await User.find({ _id: { $ne: senderId } }).select(
      "-password"
    );
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error in getUsers: ", error.message);
    res.status(500).json({ success: false, message: "Internal Sever Error" });
  }
};
