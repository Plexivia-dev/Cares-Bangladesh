import mongoose, { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    content: { type: String, required: true },
    excerpt: { type: String, default: "", trim: true },
    coverImage: { type: String, default: "", trim: true },
    author: { type: String, default: "Admin", trim: true },
    categories: [{ type: String, trim: true }],
    tags: [{ type: String, trim: true }],
    readTime: { type: Number, default: 3 },
    seo: {
      title: { type: String, default: "", trim: true },
      description: { type: String, default: "", trim: true },
      focusKeyword: { type: String, default: "", trim: true },
      canonical: { type: String, default: "", trim: true },
      ogImage: { type: String, default: "", trim: true },
      ogTitle: { type: String, default: "", trim: true },
      ogDescription: { type: String, default: "", trim: true },
      twitterTitle: { type: String, default: "", trim: true },
      twitterDescription: { type: String, default: "", trim: true },
      isRobotsNoindex: { type: Boolean, default: false },
    },
    publishedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        ret.id = ret._id?.toString();
        delete ret._id;
        return ret;
      },
    },
  }
);

export const BlogModel = mongoose.models.Blog || model("Blog", blogSchema);
