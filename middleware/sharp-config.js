// const sharp = require('sharp');
// const path = require('path');
// const fs = require('fs');

// const resizeAndCropImage = async (req, res, next) => {
//   if (!req.file) {
//     return next();
//   }

//   const imagePath = req.file.path;
//   const originalFilename = req.file.filename.split('.')[0];
//   const outputFilename = `${originalFilename}-${Date.now()}.jpeg`;
//   const outputPath = path.join(path.dirname(imagePath), outputFilename);

//   try {
//     await sharp(imagePath)
//       .resize(350, 260)
//       .extract({ left: 0, top: 0, width: 350, height: 260 })
//       .toFile(outputPath);

//     fs.unlink(imagePath, (err) => {
//       if (err) {
//         console.error('Erreur lors de la suppression de l\'image d\'origine:', err);
//         return res.status(500).send('Erreur lors de la suppression de l\'image d\'origine');
//       }

//       req.file.filename = outputFilename;
//       req.file.path = outputPath;

//       next();
//     });
//   } catch (error) {
//     console.error(error.message);
//     return res.status(500).send();
//   }
// };

// module.exports = resizeAndCropImage;










// const sharp = require('sharp');
// const path = require('path');
// const fs = require('fs');

// const resizeAndCropImage = async (req, res, next) => {
//   if (!req.file) {
//     return next(); 
//   }

//   const imagePath = req.file.path; 
//   const outputFilename = `image-${Date.now()}.jpeg`; 
//   const outputPath = path.join(__dirname, '..', 'images', outputFilename); 

//   try {
//     await sharp(imagePath)
//       .resize(150, 97)
//       .toFile(outputPath);

//     fs.unlink(imagePath, (err) => {
//       if (err) {
//         console.error('Erreur lors de la suppression de l\'image d\'origine:', err);
//         return res.status(500).send('Erreur lors de la suppression de l\'image d\'origine');
//       }

//       req.file.filename = outputFilename;
//       req.file.path = outputPath; 
//       next(); 
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send('Erreur lors du traitement de l\'image');
//   }
// };

// module.exports = resizeAndCropImage;

/*** */

// const sharp = require('sharp')

// const resizeImage = () => {
//   const resize = sharp('./images/robo.jpg')
//   .resize(350, 260)
//   .toFile(__dirname + '/processed_images/resize_robo.jpg')

//   console.log(resize)
// }

// resizeImage()

// const sharp = require('sharp')

// const cropImage = () => {
//   sharp('./images/robo.jpg')
//   .extract({left: 740, width: 500, height: 300, top: 340})
//   .toFile(__dirname + '/processed_images/crop_robo.png')
// }

// cropImage()

/***** */