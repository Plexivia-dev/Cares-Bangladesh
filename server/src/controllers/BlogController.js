import { BlogModel } from "../models/blog.model.js";

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find().sort({ publishedAt: -1 });
    res.json({ status: "success", data: blogs });
  } catch (error) {
    next(error);
  }
};

export const getActiveBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find({ isActive: true }).sort({ publishedAt: -1 });
    res.json({ status: "success", data: blogs });
  } catch (error) {
    next(error);
  }
};

export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await BlogModel.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ status: "error", message: "Blog not found" });
    res.json({ status: "success", data: blog });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const blog = await BlogModel.create(req.body);
    res.status(201).json({ status: "success", data: blog });
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const blog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ status: "error", message: "Blog not found" });
    res.json({ status: "success", data: blog });
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const blog = await BlogModel.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ status: "error", message: "Blog not found" });
    res.json({ status: "success", message: "Blog deleted" });
  } catch (error) {
    next(error);
  }
};
