const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

//dotenv
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewears
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", require("./routes/userRoutes"));

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`.bgCyan.white);
});
