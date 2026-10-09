import express from 'express';
import { createComplaint, getComplaints, updateComplaintStatus } from '../controllers/complaintController.js';
import { optionalVerifyToken, verifyToken, isAdmin } from '../middleware/authorization.js';

const router = express.Router();

// @route POST /api/complaints - Submit complaint/feedback for an AI response
router.post('/', optionalVerifyToken, createComplaint);

// @route GET /api/complaints - List all complaints for Admin Dashboard
router.get('/', verifyToken, isAdmin, getComplaints);

// @route PATCH /api/complaints/:id/status - Update complaint status
router.patch('/:id/status', verifyToken, isAdmin, updateComplaintStatus);

export default router;
