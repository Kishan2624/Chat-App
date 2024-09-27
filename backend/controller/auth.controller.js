import User from "../model/auth.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const {
      fullName,
      username,
      gender,
      password,
      confirmPassword,
      profilePic,
    } = req.body;

    // Check if all required fields are provided
    if (!fullName || !username || !gender || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "All Fields Required" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res
        .status(403)
        .json({ success: false, message: "Confirm Password does not match" });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Username already taken" });
    }

    // Assign default profile picture if none is provided
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      fullName,
      username,
      gender,
      password: hashedPassword,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //Generate JWT Token
      generateTokenAndSetCookie(newUser._id, res);
      // Save the user to MongoDB
      await newUser.save();

      // Respond with success message
      res.status(201).json({
        success: true,
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const checkPassword = await bcryptjs.compare(
      password,
      user?.password || ""
    );
    if (!user || !checkPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }
    //Generate JWT Token
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      success: true,
      id: user._id,
      username: user.username,
      fullName: user.fullName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res
      .status(200)
      .json({ success: true, message: "User successfully logout!" });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ success: false, message: "Internal Server error" });
  }
};
