const fs = require('fs');
const path = require('path');
const qpdf = require('node-qpdf'); // Correct way to use node-qpdf

const convertedDir = './converted';
if (!fs.existsSync(convertedDir)) fs.mkdirSync(convertedDir);

const passwordProtectPdf = async (file, password) => {
  const inputPath = file.path;
  const outputPath = path.join(convertedDir, `${file.originalname}`);

  // Ensure that password is provided
  if (!password) {
    throw new Error('Password is required for encryption');
  }

  // Encrypt the PDF using node-qpdf
  const options = {
    keyLength: 256,  // Encryption strength (256-bit)
    password: password,  // Set the password for encryption
    outputFile: outputPath,  
  };

  // Encrypt the PDF file directly and save it as the output file
  await qpdf.encrypt(inputPath, options);

  return outputPath; // Return the path of the protected PDF
};

module.exports = { passwordProtectPdf };
