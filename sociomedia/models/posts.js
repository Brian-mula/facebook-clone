const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// user schema
const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    max: 500,
  },
  img: {
    type: String,
  },
  likes: {
    type: Array,
    default: [],
  },
});
// generate the user model
const Post = mongoose.model("post", PostSchema);
// export the model
module.exports = Post;
