const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const useRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const PostsRouter = require("./routes/Posts");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connection has been made to mongodb");
  }
);

const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/", useRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", PostsRouter);

app.listen(8080, () => {
  console.log("backend server is ready");
});
