const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const postRoutes = require("./routes/postRotes.js");
const path = require("path");
const upload = require("express-fileupload");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.ORIGIN }));

app.use(upload());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use(notFound);
app.use(errorHandler);

const uploadsPath = path.join(
  __dirname,
  "uploads" + `/CS1ae51763-ea6c-4f06-a3ee-fa1f8b72997f.png`
);

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connect(process.env.MONGO_URI)
  .then(app.listen(port, () => console.log("Server started on port", port)))
  .catch((err) => console.log(err));

// vikas123
