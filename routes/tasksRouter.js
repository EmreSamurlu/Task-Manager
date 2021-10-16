const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

router.route("/").get(getAllTasks).post(createTask); // these two methods have same url. so we can chain them.
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask); // same case in here

module.exports = router;
