import { nanoid } from "nanoid";

export const generateShortCode = () => {
  return nanoid(6);
};
