import { Router } from "express";
import {
  getBlogs,
  getActiveBlogs,
  getBlogBySlug,
  getBlogCategories,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogController.js";
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware.js";

const blogRouter = Router();

// Public
blogRouter.get("/public", getActiveBlogs);
blogRouter.get("/public/categories", getBlogCategories);
blogRouter.get("/public/:slug", getBlogBySlug);

// Protected
blogRouter.get("/", authenticateToken, authorizeRoles("Owner", "Admin"), getBlogs);
blogRouter.post("/", authenticateToken, authorizeRoles("Owner", "Admin"), createBlog);
blogRouter.put("/:id", authenticateToken, authorizeRoles("Owner", "Admin"), updateBlog);
blogRouter.delete("/:id", authenticateToken, authorizeRoles("Owner", "Admin"), deleteBlog);

export default blogRouter;
