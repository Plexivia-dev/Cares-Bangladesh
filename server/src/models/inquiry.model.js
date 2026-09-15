import mongoose, { Schema, model } from "mongoose";

const inquirySchema = new Schema(
  {
    parentName: { type: String, required: true, trim: true },
    childName: { type: String, default: "", trim: true },
    childAge: { type: String, default: "", trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, default: "", trim: true },
    service: { type: String, default: "Speech & Language Therapy", trim: true },
    preferredDate: { type: String, default: "", trim: true },
    notes: { type: String, default: "", trim: true },
    status: {
      type: String,
      enum: ["pending", "contacted", "scheduled", "completed", "cancelled"],
      default: "pending",
    },
    source: { type: String, default: "website", trim: true },
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

export const InquiryModel = mongoose.models.Inquiry || model("Inquiry", inquirySchema);
