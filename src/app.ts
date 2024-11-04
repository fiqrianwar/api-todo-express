import express, { Application } from "express";
import connectDb from "./config/db";
import todoListRoutes from "./routes/todoListRoutes/todoListRoutes";

const app: Application = express();

connectDb();

app.use(express.json());

app.use("/api/todolist", todoListRoutes);

export default app;
