import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import { getAllTasks, createTask } from "../controllers/taskControler.js";

const router = new Router();

// Get all user's Tasks
// http://SERVER:PORT/api/API_VERSION/tasks
router.get("/", checkAuth, getAllTasks);

// Create Task
// http://SERVER:PORT/api/API_VERSION/tasks
router.post("/", checkAuth, createTask);

// Get Task by id
// http://SERVER:PORT/api/API_VERSION/tasks/:id
router.get("/:id", checkAuth);

// Patch Task by id
// http://SERVER:PORT/api/API_VERSION/tasks/:id
router.patch("/:id", checkAuth);

// Delete Task by id
// http://SERVER:PORT/api/API_VERSION/tasks/:id
router.delete("/:id", checkAuth);

export default router;
