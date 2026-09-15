import { BlogModel } from "../models/blog.model.js";

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find().sort({ publishedAt: -1 });
    res.json({ status: "success", data: blogs });
  } catch (error) {
    next(error);
  }
};

// Helper to build test post exclusion filter
const getClinicalBlogFilter = () => ({
  isActive: true,
  slug: { $not: /^(test-post|test123123|test-|dummy-|temp-)/i },
  title: { $not: /^(test|dummy|sample\s*test)/i },
});

// Retrieves paginated and filtered list of active blogs for public storefront
export const getActiveBlogs = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, Math.min(100, parseInt(req.query.limit) || 9));
    const search = (req.query.search || "").trim();
    const category = (req.query.category || "").trim();

    const query = { ...getClinicalBlogFilter() };
    if (search) {
      query.$and = [
        {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { excerpt: { $regex: search, $options: "i" } },
          ],
        },
      ];
    }
    if (category && category !== "All") {
      query.categories = category;
    }

    const total = await BlogModel.countDocuments(query);
    const blogs = await BlogModel.find(query)
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    res.json({
      status: "success",
      data: blogs,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Retrieves list of distinct categories from published clinical blogs
export const getBlogCategories = async (req, res, next) => {
  try {
    const categories = await BlogModel.distinct("categories", getClinicalBlogFilter());
    res.json({ status: "success", data: categories.filter(Boolean) });
  } catch (error) {
    next(error);
  }
};

// Retrieves single blog by slug ensuring genuine clinical content
export const getBlogBySlug = async (req, res, next) => {
  try {
    const slug = (req.params.slug || "").trim();
    if (/^(test-post|test123123|test-|dummy-|temp-)/i.test(slug)) {
      return res.status(404).json({ status: "error", message: "Blog not found" });
    }

    const blog = await BlogModel.findOne({ slug, isActive: true });
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
