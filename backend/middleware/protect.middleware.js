import jwt from "jsonwebtoken";
import User from "../model/auth.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res
        .status(403)
        .json({ success: false, message: "No token provided" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User" });
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default protectRoute;
