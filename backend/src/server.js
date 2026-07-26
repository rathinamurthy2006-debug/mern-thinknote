import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import noteRouter from "./routes/noteRoutes.js";
import rateLimiter from "./middleware/rateLimit.js";
import { connectDB } from "./config/db.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(cors(
  {
    origin:"http://localhost:5173",
  }
))
app.use(express.json());
app.use(rateLimiter);



app.use("/api/notes", noteRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started on PORT :", PORT);
  });
});
