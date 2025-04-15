import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

async function getAllTask() {
  try {
    const list = await knex("tasks").select();
    return list;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function getTaskID(id) {
  try {
    const task = await knex("tasks").where("id", id);
    return task;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function createTask(body) {
  try {
    const [id] = await knex("tasks").insert(body);
    console.log("id " + id);

    const newTask = await knex("tasks").where("id", id).first();
    console.log(newTask);
    return newTask;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function updateStatus(id, status) {
  try {
    const newStatus = knex("tasks").update({ status }).where("id", id);

    return newStatus;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function deleteTask(id) {
  try {
    const deleted = knex("tasks").where("id", id).del();

    return deleted;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default {
  getAllTask,
  getTaskID,
  createTask,
  updateStatus,
  deleteTask,
};
