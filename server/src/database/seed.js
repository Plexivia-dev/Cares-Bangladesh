import mongoose from "mongoose";
import { env } from "../config/env.js";
import { StoreSettingsModel } from "../models/storeSettings.model.js";
import { TeamModel } from "../models/team.model.js";
import { BlogModel } from "../models/blog.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Seeds branding settings and default SEO configuration into database
const seedBrandingAndSeo = async () => {
  await StoreSettingsModel.findOneAndUpdate(
    { key: "default" },
    {
      $set: {
        branding: {
          logoUrl: "/uploads/2024/09/CARES-Bangladesh-Logo-5__1_-removebg-preview.png",
          faviconUrl: "/uploads/2024/08/site_icon-removebg-preview.png",
        },
        seo: {
          metaTitle: "Cares Bangladesh | Occupational & Speech Therapy Center in Dhaka",
          metaDescription: "Best Occupational, Speech & Language Therapy, ABA & Early Childhood Learning center in Dhaka Bangladesh.",
          keywords: [
            "Occupational Therapy Dhaka",
            "Speech Therapy Bangladesh",
            "ABA Therapy",
            "Autism Care Center Dhaka",
            "Child Development Center",
          ],
          ogImage: "/uploads/2024/09/CARES-Bangladesh-Logo-5__1_-removebg-preview.png",
          siteName: "Cares Bangladesh",
          twitterHandle: "@caresbangladesh",
          canonicalBaseUrl: "https://caresbangladesh.com",
          robotsTxt: "User-agent: *\nAllow: /\nDisallow: /dashboard/\nDisallow: /api/",
          gscVerificationCode: "",
        },
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
};

// Seeds clinical team specialists into database
const seedTeam = async () => {
  const possiblePaths = [
    path.resolve(__dirname, "../data/team.json"),
    path.resolve(__dirname, "../../../web/src/data/team.json"),
  ];
  const teamPath = possiblePaths.find((p) => fs.existsSync(p));
  if (!teamPath) return;
  const raw = fs.readFileSync(teamPath, "utf-8");
  const teamList = JSON.parse(raw);

  for (let i = 0; i < teamList.length; i++) {
    const m = teamList[i];
    await TeamModel.findOneAndUpdate(
      { name: m.name },
      {
        $set: {
          name: m.name,
          role: m.role,
          category: m.category || "General",
          bio: m.bio || "",
          image: m.image || "",
          isLeadership: Boolean(m.isLeadership),
          order: i,
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  }
};

// Seeds published blog posts and associated SEO metadata into database
const seedBlogs = async () => {
  const possiblePaths = [
    path.resolve(__dirname, "../data/posts.json"),
    path.resolve(__dirname, "../../../backups/json_data/posts.json"),
    path.resolve(__dirname, "../../../web/src/data/posts.json"),
  ];
  const filePath = possiblePaths.find((p) => fs.existsSync(p));
  if (!filePath) return;

  const raw = fs.readFileSync(filePath, "utf-8");
  const postList = JSON.parse(raw);

  const validSlugs = postList.map((p) => p.slug).filter(Boolean);
  if (validSlugs.length > 0) {
    await BlogModel.deleteMany({ slug: { $nin: validSlugs } });
  }
  await BlogModel.deleteMany({
    $or: [
      { slug: { $regex: /^(test-post|test123123|test-|dummy-|temp-)/i } },
      { title: { $regex: /^(test|dummy|sample\s*test)/i } },
    ],
  });

  for (const p of postList) {
    if (!p.slug || !p.title) continue;
    const categories = Array.isArray(p.categories)
      ? p.categories.map((c) => (typeof c === "string" ? c : c.name || c.slug)).filter(Boolean)
      : [];
    const tags = Array.isArray(p.tags)
      ? p.tags.map((t) => (typeof t === "string" ? t : t.name || t.slug)).filter(Boolean)
      : [];

    await BlogModel.findOneAndUpdate(
      { slug: p.slug },
      {
        $set: {
          title: p.title,
          slug: p.slug,
          content: p.content || "",
          excerpt: p.excerpt || "",
          coverImage: p.featuredImage || p.coverImage || "",
          author: typeof p.author === "object" ? p.author?.name || "Admin" : p.author || "Admin",
          categories,
          tags,
          readTime: p.readTime || 3,
          seo: {
            title: p.seo?.title || p.title,
            description: p.seo?.description || p.excerpt || "",
            focusKeyword: p.seo?.focusKeyword || "",
            canonical: p.seo?.canonical || `https://caresbangladesh.com/${p.slug}`,
            ogImage: p.seo?.openGraphImage || p.featuredImage || "",
            ogTitle: p.seo?.openGraphTitle || p.seo?.title || p.title,
            ogDescription: p.seo?.openGraphDescription || p.seo?.description || p.excerpt || "",
            twitterTitle: p.seo?.twitterTitle || p.seo?.title || p.title,
            twitterDescription: p.seo?.twitterDescription || p.seo?.description || "",
            twitterImage: p.seo?.twitterImage || p.featuredImage || "",
            isRobotsNoindex: Boolean(p.seo?.isRobotsNoindex),
          },
          publishedAt: p.date ? new Date(p.date) : new Date(),
          isActive: p.status ? p.status === "publish" : true,
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  }
};

// Orchestrates execution of all seeding tasks
export const runSeed = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    await seedBrandingAndSeo();
    await seedTeam();
    await seedBlogs();
    await mongoose.disconnect();
  } catch (err) {
    process.exit(1);
  }
};

if (process.argv[1] && process.argv[1].endsWith("seed.js")) {
  runSeed();
}
