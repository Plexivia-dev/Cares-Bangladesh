import crypto from "crypto";

export const generateDid = () => {
  return `did:cares:${crypto.randomBytes(16).toString("hex")}`;
};
