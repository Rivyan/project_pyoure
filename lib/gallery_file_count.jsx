import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "moments_gallery");

export function getImageFolderLength() {
  const imagesLength = fs.readdirSync(imagesDir).length;
  return imagesLength;
}
