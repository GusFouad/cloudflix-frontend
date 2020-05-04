const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");
const moviesRoute = require("./routes/movies");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("connected to Mongodb")
);

app.use("/user", authRoute);
app.use("/movies", moviesRoute);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is runnong on port: ${port}`);
});
