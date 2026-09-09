import { Router } from "express";
import {
  getSliders,
  getActiveSliders,
  createSlider,
  updateSlider,
  deleteSlider,
} from "../controllers/HomeSliderController.js";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware.js";

const homeSliderRouter = Router();

// Public
homeSliderRouter.get("/public", getActiveSliders);

// Protected
homeSliderRouter.get("/", authenticateToken, authorizeRoles("Owner", "Admin"), getSliders);
homeSliderRouter.post("/", authenticateToken, authorizeRoles("Owner", "Admin"), createSlider);
homeSliderRouter.put("/:id", authenticateToken, authorizeRoles("Owner", "Admin"), updateSlider);
homeSliderRouter.delete("/:id", authenticateToken, authorizeRoles("Owner", "Admin"), deleteSlider);

export default homeSliderRouter;
