import mongoose, { Schema, model } from "mongoose";

const teamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    category: { type: String, default: "", trim: true },
    bio: { type: String, default: "", trim: true },
    image: { type: String, default: "", trim: true },
    isLeadership: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
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

export const TeamModel = mongoose.models.Team || model("Team", teamSchema);
