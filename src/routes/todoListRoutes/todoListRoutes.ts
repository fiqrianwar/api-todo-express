import express from "express";

import {
  createTodoList,
  getTodoList,
} from "../../controllers/todoListControllers/todoListControllers";

const todoListRoutes = express.Router();

todoListRoutes.get("/", getTodoList);
todoListRoutes.post("/", createTodoList);

export default todoListRoutes;
