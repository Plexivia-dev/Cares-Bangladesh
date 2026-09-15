import { Router } from "express";
import {
  createInquiry,
  getInquiries,
  updateInquiry,
  deleteInquiry,
} from "../controllers/InquiryController.js";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware.js";

const inquiryRouter = Router();

// Public submission
inquiryRouter.post("/", createInquiry);

// Protected admin endpoints
inquiryRouter.get("/", authenticateToken, authorizeRoles("Owner", "Admin"), getInquiries);
inquiryRouter.put("/:id", authenticateToken, authorizeRoles("Owner", "Admin"), updateInquiry);
inquiryRouter.delete("/:id", authenticateToken, authorizeRoles("Owner", "Admin"), deleteInquiry);

export default inquiryRouter;
