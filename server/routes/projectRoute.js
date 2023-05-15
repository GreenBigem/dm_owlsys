import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  getAllProjects,
  createProject,
  getProjectById,
  patchProjectById,
  deleteProjectById,
} from "../controllers/projectController.js";

const router = new Router();

// Get all user's Contractors
// http://SERVER:PORT/api/API_VERSION/contractors
router.get("/", checkAuth, getAllProjects);

// Create Contractor
// http://SERVER:PORT/api/API_VERSION/contractors
router.post("/", checkAuth, createProject);

// Get Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
router.get("/:id", checkAuth, getProjectById);

// Patch Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
router.patch("/:id", checkAuth, patchProjectById);

// Delete Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
router.delete("/:id", checkAuth, deleteProjectById);

export default router;
