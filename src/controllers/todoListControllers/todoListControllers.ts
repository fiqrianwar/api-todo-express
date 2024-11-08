import { Request, Response } from "express";

import TodoList from "../../models/todoModels/todoModels";

export const getTodoList = async (_req: Request, res: Response) => {
  try {
    const todoList = await TodoList.find();
    res.status(200).json(todoList);
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export const createTodoList = async (req: Request, res: Response) => {
  try {
    const todoList = await TodoList.create(req.body);
    await todoList.save();
    res.status(201).json(todoList);
  } catch (error) {
    res.status(400).json({
      message: (error as Error).message,
    });
  }
};

export const deleteTodoList = async (req: Request, res: Response) => {
  try {
    await TodoList.deleteOne({ id: req.body.id });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(400).json({
      message: (error as Error).message,
    });
  }
};

export const updateTodoList = async (req: Request, res: Response) => {
  try {
    await TodoList.updateOne({ id: req.body.id }, req.body);
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    res.status(400).json({
      message: (error as Error).message,
    });
  }
};
