const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

//dotenv
dotenv.config();

//rest object
const app = express();

//middlewears
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Success",
  });
});

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`.bgCyan.white);
});
