import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from './config/db.js';


import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import dessertRoutes from './routes/dessertRoutes.js';


dotenv.config();

connectDB();

const app = express();

app.use(express.json());




app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/desserts", dessertRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}




app.use(notFound);

app.use(errorHandler);




app.listen(process.env.PORT || 5000);
