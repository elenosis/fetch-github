import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import coffeeshopsRouter from "./routes/coffeeshops.js";

const app = express();
const PORT = process.env.PORT || 4000;
const CONNECTION_STRING =
  process.env.MONGODB || "mongodb://localhost:27017/coffeeshops";

mongoose.connect(CONNECTION_STRING, (error) => {
  if (!error) return console.log("Connected DB");
  console.error(error);
});

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/coffeeshops", coffeeshopsRouter);

// start server
app.listen(PORT, () => {
  console.log("Server listens to Port: " + PORT);
});
