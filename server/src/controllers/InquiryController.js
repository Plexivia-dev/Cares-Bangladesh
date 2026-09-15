import { InquiryModel } from "../models/inquiry.model.js";
import nodemailer from "nodemailer";
import { env } from "../config/env.js";

let defaultTransport = null;

// Retrieves or initializes SMTP transporter
const getTransport = () => {
  if (!defaultTransport) {
    const isSecure =
      Number(env.SMTP_PORT) === 465 ||
      String(env.SMTP_ENCRYPTION).toLowerCase() === "ssl";

    defaultTransport = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT),
      secure: isSecure,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
  }
  return defaultTransport;
};

// Sends SMTP notification email on new assessment or contact submission
const sendInquiryNotification = async (inquiry) => {
  if (!env.SMTP_USER || !env.SMTP_PASSWORD) {
    return;
  }

  const transport = getTransport();
  const recipient = "contact@caresbangladesh.com";
  const fromName = env.SMTP_FROM_NAME || "Cares Bangladesh";
  const fromEmail = env.SMTP_FROM || env.SMTP_USER;

  const subject = `[New Assessment/Inquiry] ${inquiry.parentName} - ${inquiry.service || "General"}`;
  const text = `New Assessment Booking / Inquiry Received:

Parent Name: ${inquiry.parentName}
Child Name: ${inquiry.childName || "N/A"}
Child Age: ${inquiry.childAge || "N/A"}
Phone: ${inquiry.phone}
Email: ${inquiry.email || "N/A"}
Program/Service: ${inquiry.service}
Preferred Date: ${inquiry.preferredDate || "N/A"}
Notes: ${inquiry.notes || "None"}
Source: ${inquiry.source}
Date: ${new Date().toLocaleString()}
`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #0284c7; color: #ffffff; padding: 18px 24px;">
        <h2 style="margin: 0; font-size: 20px;">New Assessment Booking / Inquiry</h2>
      </div>
      <div style="padding: 24px;">
        <p style="font-size: 14px; margin-top: 0;">A new patient consultation/assessment request has been submitted through the website.</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold; width: 35%;">Parent's Name:</td>
            <td style="padding: 8px 0;">${inquiry.parentName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;"><a href="tel:${inquiry.phone}" style="color: #0284c7; font-weight: bold;">${inquiry.phone}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold;">Child's Name:</td>
            <td style="padding: 8px 0;">${inquiry.childName || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold;">Child's Age:</td>
            <td style="padding: 8px 0;">${inquiry.childAge || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold;">Program / Service:</td>
            <td style="padding: 8px 0;">${inquiry.service || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold;">Preferred Date:</td>
            <td style="padding: 8px 0;">${inquiry.preferredDate || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${inquiry.email || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Notes / Concerns:</td>
            <td style="padding: 8px 0;">${inquiry.notes || "None"}</td>
          </tr>
        </table>
      </div>
      <div style="background-color: #f8fafc; padding: 12px 24px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
        Received from Cares Bangladesh Website Submission Portal.
      </div>
    </div>
  `;

  try {
    await transport.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: recipient,
      replyTo: inquiry.email || undefined,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("Failed to send inquiry SMTP notification:", err.message);
  }
};

// Handles public assessment and contact inquiry submissions
export const createInquiry = async (req, res, next) => {
  try {
    const {
      parentName,
      childName = "",
      childAge = "",
      phone,
      email = "",
      service = "Speech & Language Therapy",
      preferredDate = "",
      notes = "",
      source = "website",
    } = req.body || {};

    if (!parentName || !phone) {
      return res.status(400).json({
        status: "error",
        message: "Parent name and phone number are required.",
      });
    }

    const inquiry = await InquiryModel.create({
      parentName: String(parentName).trim(),
      childName: String(childName).trim(),
      childAge: String(childAge).trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
      service: String(service).trim(),
      preferredDate: String(preferredDate).trim(),
      notes: String(notes).trim(),
      source: String(source).trim(),
    });

    sendInquiryNotification(inquiry).catch(() => {});

    res.status(201).json({
      status: "success",
      message: "Your inquiry has been received. Our clinical team will reach out soon.",
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
};

// Retrieves paginated list of inquiries for admin dashboard
export const getInquiries = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, Math.min(100, parseInt(req.query.limit) || 20));
    const status = (req.query.status || "").trim();

    const query = {};
    if (status && status !== "all") {
      query.status = status;
    }

    const total = await InquiryModel.countDocuments(query);
    const inquiries = await InquiryModel.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    res.json({
      status: "success",
      data: inquiries,
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

// Updates status or notes for an inquiry record
export const updateInquiry = async (req, res, next) => {
  try {
    const inquiry = await InquiryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inquiry) return res.status(404).json({ status: "error", message: "Inquiry not found" });
    res.json({ status: "success", data: inquiry });
  } catch (error) {
    next(error);
  }
};

// Deletes an inquiry record
export const deleteInquiry = async (req, res, next) => {
  try {
    const inquiry = await InquiryModel.findByIdAndDelete(req.params.id);
    if (!inquiry) return res.status(404).json({ status: "error", message: "Inquiry not found" });
    res.json({ status: "success", message: "Inquiry deleted" });
  } catch (error) {
    next(error);
  }
};
