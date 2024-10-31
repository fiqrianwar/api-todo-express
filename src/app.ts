import express, { Application } from "express";
import connectDb from "./config/db";

const app: Application = express();

connectDb();

app.use(express.json());

export default app;
