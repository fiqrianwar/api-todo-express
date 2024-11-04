import mongoose from "mongoose";
import { todoListSchemaTypes } from "./types";

const todoListSchema = new mongoose.Schema({
  id: { type: String, require: true, default: "" },
  todo_list: { type: String, default: "" },
  username: {
    type: String,
    require: true,
    default: "fiqrianwar@124.com",
  },
  password: {
    type: String,
    require: true,
    default: "12345",
  },
});

export default mongoose.model<todoListSchemaTypes>("Todolist", todoListSchema);
