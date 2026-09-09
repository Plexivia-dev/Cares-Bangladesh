import { TeamModel } from "../models/team.model.js";

export const getTeam = async (req, res, next) => {
  try {
    const team = await TeamModel.find().sort({ order: 1 });
    res.json({ status: "success", data: team });
  } catch (error) {
    next(error);
  }
};

export const createTeamMember = async (req, res, next) => {
  try {
    const member = await TeamModel.create(req.body);
    res.status(201).json({ status: "success", data: member });
  } catch (error) {
    next(error);
  }
};

export const updateTeamMember = async (req, res, next) => {
  try {
    const member = await TeamModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) return res.status(404).json({ status: "error", message: "Member not found" });
    res.json({ status: "success", data: member });
  } catch (error) {
    next(error);
  }
};

export const deleteTeamMember = async (req, res, next) => {
  try {
    const member = await TeamModel.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ status: "error", message: "Member not found" });
    res.json({ status: "success", message: "Member deleted" });
  } catch (error) {
    next(error);
  }
};
