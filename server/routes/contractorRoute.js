import { Router } from "express"
import { checkAuth } from "../utils/checkAuth.js"
import { deleteContractorById, updateContractorById, getAllContractors, getContractorById } from "../controllers/contractorController.js"
import { createContractor } from '../controllers/contractorController.js';

const router = new Router()

// Get all user??? Contractors
// http://localhost:3002/api/contractors/
// router.get('/', checkAuth, getAll)
router.get('/', checkAuth, getAllContractors)

// Create Contractor
// http://localhost:3002/api/contractors
router.post('/', checkAuth, createContractor)

// Get Contractor by id
// http://localhost:3002/api/contractors/:id
router.get('/:id', checkAuth, getContractorById)

// Update Contractor by id
// http://localhost:3002/api/contractors/:id
router.put('/:id', checkAuth, updateContractorById)

// Deleye Contractor by id
// http://localhost:3002/api/contractors/:id
router.delete('/:id', checkAuth, deleteContractorById)

export default router