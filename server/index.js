import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.js";
import taskRoute from "./routes/taskRoute.js";
import contractorRoute from "./routes/contractorRoute.js";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3001;
const DB_FULL_URL = process.env.DB_FULL_URL;
const API_VERSION = process.env.API_VERSION || "v1.0.0";

// Middlewares
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static("uploads"));

// Routes - http(s)://SERVER:PORT/
app.use(`/api/${API_VERSION}/auth`, authRoute);
app.use(`/api/${API_VERSION}/tasks`, taskRoute);
app.use(`/api/${API_VERSION}/contractors`, contractorRoute);

// Functions
async function start() {
  try {
    await mongoose.connect(`${DB_FULL_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connected!");
    app.listen(PORT, () => {
      console.log(`Server Started on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
