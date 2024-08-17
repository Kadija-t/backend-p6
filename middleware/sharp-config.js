const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function resizeAndCropImage(req, res, next) {
  if (req.file) {
    const imagePath = req.file.path;

    try {
      sharp.cache(false);

      const resizedImage = await sharp(imagePath)
        .resize(350, 260)
        .extract({ left: 0, top: 0, width: 350, height: 260 })
        .jpeg({ quality: 80 })
        .toBuffer();

      const originalName = req.file.originalname
        .split(".")[0]
        .split(" ")
        .join("_");
      const extension = path.extname(req.file.filename);
      const newFilename = `${originalName}_${Date.now()}${extension}`;
      const newImagePath = path.join(path.dirname(imagePath), newFilename);

      await fs.promises.writeFile(newImagePath, resizedImage);

      await fs.promises.unlink(imagePath);

      req.file.filename = newFilename;
      req.file.path = newImagePath;

      next();
    } catch (error) {
      console.error("Erreur lors du traitement de l'image:", error);
      return res.status(500).send("Erreur lors du traitement de l'image");
    }
  } else {
    next();
  }
}

module.exports = resizeAndCropImage;
