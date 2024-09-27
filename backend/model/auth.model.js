import mongoose, { Schema } from "mongoose";

const user = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
      optional: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", user);
export default User;
