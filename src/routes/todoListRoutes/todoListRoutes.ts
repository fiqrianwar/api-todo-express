import express from "express";

import {
  createTodoList,
  deleteTodoList,
  getTodoList,
} from "../../controllers/todoListControllers/todoListControllers";

const todoListRoutes = express.Router();

todoListRoutes.get("/", getTodoList);
todoListRoutes.post("/", createTodoList);
todoListRoutes.delete("/", deleteTodoList);

export default todoListRoutes;
