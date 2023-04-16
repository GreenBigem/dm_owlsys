import { Router } from "express"
import { login, getMe } from "../controllers/auth.js"
import { checkAuth } from "../utils/checkAuth.js"
import { getAll } from "../controllers/taskControler.js"
import { createTask } from "../controllers/taskControler.js"

const router = new Router()

// Get all tasks
// http://localhost:3002/api/task/
router.get('/', checkAuth, createTask)

// Create task
// http://localhost:3002/api/tasks
router.post('/', checkAuth, createTask)


export default router