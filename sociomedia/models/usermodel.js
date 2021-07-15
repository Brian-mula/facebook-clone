const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    coverPhoto: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    des: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", UserSchema);
module.exports = User;
