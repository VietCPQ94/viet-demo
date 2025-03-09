/* eslint-disable no-useless-escape */
import { Buffer } from "buffer";

export default (escapedString: string) => {
  const temp = `"${escapedString
    .trim()
    .substring(2, escapedString.length - 1)
    .replace(/"/g, '\\"')}"`;

  const uint8Array = Buffer.from(eval(`${temp}`), "binary");
  const blob = new Blob([uint8Array], { type: "image/jpeg" });
  const url = URL.createObjectURL(blob);
  return url;
};
