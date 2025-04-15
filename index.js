import express from "express";
import cors from "cors";
import "dotenv/config";
import TasksController from "./Controllers/TasksController.js";

const PORT = process.env.PORT;
const BACKEND_URL = process.env.BACKEND_URL;

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(express.json());

app.get("/tasks", TasksController.getAllTask);
app.get("/tasks/:id", TasksController.getTaskID);
app.post("/task", TasksController.createTask);
app.patch("/status/:id", TasksController.updateStatus);
app.delete("/:id", TasksController.deleteTask);

app.listen(PORT, () => {
  console.log(`Listening on ${BACKEND_URL}:${PORT}`);
});
