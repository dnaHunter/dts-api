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

// const body = {
//     "title":"New Task",
//     "status":"Not Started",
//     "due_date": Date.now()
// }

// return JSON.stringify(body);

async function createTask(req, res) {
  const body = req.body;
  console.log(req.body);

  if (!body.title || !body.status || !body.due_date) {
    return res
      .status(400)
      .json({ message: "A task needs a title, status and due date" });
  }

  const newTask = await TasksModel.createTask(body);

  if (!newTask) {
    return res
      .status(400)
      .json("Request encountered an error. Check the request.");
  }

  res.json(newTask);
}

async function updateStatus(req, res) {}

async function deleteTask(req, res) {}

export default {
  getAllTask,
  getTaskID,
  createTask,
  updateStatus,
  deleteTask,
};
