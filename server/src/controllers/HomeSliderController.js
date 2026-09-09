import { HomeSliderModel } from "../models/homeSlider.model.js";

export const getSliders = async (req, res, next) => {
  try {
    const sliders = await HomeSliderModel.find().sort({ order: 1 });
    res.json({ status: "success", data: sliders });
  } catch (error) {
    next(error);
  }
};

export const getActiveSliders = async (req, res, next) => {
  try {
    const sliders = await HomeSliderModel.find({ isActive: true }).sort({ order: 1 });
    res.json({ status: "success", data: sliders });
  } catch (error) {
    next(error);
  }
};

export const createSlider = async (req, res, next) => {
  try {
    const slider = await HomeSliderModel.create(req.body);
    res.status(201).json({ status: "success", data: slider });
  } catch (error) {
    next(error);
  }
};

export const updateSlider = async (req, res, next) => {
  try {
    const slider = await HomeSliderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!slider) return res.status(404).json({ status: "error", message: "Slider not found" });
    res.json({ status: "success", data: slider });
  } catch (error) {
    next(error);
  }
};

export const deleteSlider = async (req, res, next) => {
  try {
    const slider = await HomeSliderModel.findByIdAndDelete(req.params.id);
    if (!slider) return res.status(404).json({ status: "error", message: "Slider not found" });
    res.json({ status: "success", message: "Slider deleted" });
  } catch (error) {
    next(error);
  }
};
