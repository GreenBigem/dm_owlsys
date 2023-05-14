import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  getAllContractors,
  createContractor,
  getContractorById,
  patchContractorById,
  deleteContractorById,
} from "../controllers/contractorController.js";

const router = new Router();

// Get all user's Contractors
// http://SERVER:PORT/api/API_VERSION/contractors
router.get("/", checkAuth, getAllContractors);

// Create Contractor
// http://SERVER:PORT/api/API_VERSION/contractors
router.post("/", checkAuth, createContractor);

// Get Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
router.get("/:id", checkAuth, getContractorById);

// Patch Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
router.patch("/:id", checkAuth, patchContractorById);

// Delete Contractor by id
// http://SERVER:PORT/api/API_VERSION/contractors/:id
router.delete("/:id", checkAuth, deleteContractorById);

export default router;
