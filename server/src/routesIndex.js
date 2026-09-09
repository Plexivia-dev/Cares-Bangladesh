import { Router } from "express";
import imagesRouter from "./routes/ImagesRoute.js";
import authRouter from "./routes/AuthRoute.js";
import assetsRouter from "./routes/AssetsRoute.js";
import settingsRouter from "./routes/SettingsRoute.js";
import homeSliderRouter from "./routes/HomeSliderRoute.js";
import blogRouter from "./routes/BlogRoute.js";
import teamRouter from "./routes/TeamRoute.js";
import express from "express";

const coreRouter = Router();

coreRouter.use("/images", imagesRouter);
coreRouter.use("/auth", authRouter);
coreRouter.use("/assets", assetsRouter);
coreRouter.use("/settings", settingsRouter);
coreRouter.use("/home-slider", homeSliderRouter);
coreRouter.use("/blogs", blogRouter);
coreRouter.use("/team", teamRouter);

export default coreRouter;
