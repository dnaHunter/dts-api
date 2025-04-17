import dayjs from "dayjs";
import TasksModel from "../Models/TasksModel.js";

async function getAllTask(req, res) {
  const data = await TasksModel.getAllTask();

  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  res.json(data);
}

async function getTaskID(req, res) {
  const data = await TasksModel.getTaskID(req.params.id);

  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  res.json(data);
}

async function createTask(req, res) {
  const body = req.body;

  if (!body.title || !body.status || !body.due_date) {
    return res
      .status(400)
      .json({ message: "A task needs a title, status and due date" });
  }

  body.due_date = dayjs(body.due_date).toDate();

  const newTask = await TasksModel.createTask(body);

  if (!newTask) {
    return res
      .status(400)
      .json("Request encountered an error. Check the request.");
  }

  res.json(newTask);
}

async function updateStatus(req, res) {
  const body = req.body;

  if (!body.status) {
    return res
      .status(400)
      .json({ message: "A status message is needed in the body." });
  }

  const newStatus = await TasksModel.updateStatus(
    req.params.id,
    req.body.status
  );

  if (!newStatus) {
    return res
      .status(400)
      .json({ message: "Request encountered an error. Check the request." });
  }

  res.json(newStatus);
}

async function deleteTask(req, res) {
  const deleted = await TasksModel.deleteTask(req.params.id);

  res.status(200).json({ message: "Successfully deleted" });
}

export default {
  getAllTask,
  getTaskID,
  createTask,
  updateStatus,
  deleteTask,
};
