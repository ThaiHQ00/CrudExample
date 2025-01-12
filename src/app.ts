import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Node API Server Updated");
});

// MongoDB connection
const MONGO_URI = "mongodb+srv://CrudExample:DbkTI7Bc3FwoZ918@crudexpress.ia24c.mongodb.net/?retryWrites=true&w=majority&appName=CrudExpress";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error: Error) => {
    console.error("Connection failed!", error.message);
  });
