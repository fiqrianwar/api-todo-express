import express from "express";

import {
  createTodoList,
  deleteTodoList,
  getTodoList,
  updateTodoList,
} from "../../controllers/todoListControllers/todoListControllers";

const todoListRoutes = express.Router();

todoListRoutes.get("/", getTodoList);
todoListRoutes.post("/", createTodoList);
todoListRoutes.delete("/", deleteTodoList);
todoListRoutes.patch("/", updateTodoList);

export default todoListRoutes;
