import { Router } from "express"
import { login, getMe } from "../controllers/auth.js"
import { checkAuth } from "../utils/checkAuth.js"
import { getAll } from "../controllers/taskControler.js"
import { createTask } from "../controllers/taskControler.js"

const router = new Router()

// Get all tasks
// http://localhost:3002/api/task/
// router.get('/', checkAuth, getAll)
router.get('/', getAll)

// Create task
// http://localhost:3002/api/tasks
router.post('/', checkAuth, createTask)

// Get Task by id
// http://localhost:3002/api/tasks/:id
router.get('/:id', checkAuth)

// Update Task by id
// http://localhost:3002/api/tasks/:id
router.put('/:id', checkAuth)

// Deleye Task by id
// http://localhost:3002/api/tasks/:id
router.delete('/:id', checkAuth)


export default router