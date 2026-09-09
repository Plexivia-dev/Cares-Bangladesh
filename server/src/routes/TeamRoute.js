import { Router } from "express";
import {
  getTeam,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../controllers/TeamController.js";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware.js";

const teamRouter = Router();

// Public
teamRouter.get("/public", getTeam);

// Protected
teamRouter.get("/", authenticateToken, authorizeRoles("Owner", "Admin"), getTeam);
teamRouter.post("/", authenticateToken, authorizeRoles("Owner", "Admin"), createTeamMember);
teamRouter.put("/:id", authenticateToken, authorizeRoles("Owner", "Admin"), updateTeamMember);
teamRouter.delete("/:id", authenticateToken, authorizeRoles("Owner", "Admin"), deleteTeamMember);

export default teamRouter;
