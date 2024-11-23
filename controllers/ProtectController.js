const ProtectService = require('../services/protectService');

let protectedFilePath = null; // Store the path of the protected PDF

const protectPage = (req, res) => {
  res.render('protect', { protectedFilePath: null });
};

const protectPdf = async (req, res) => {
  try {
    const file = req.file;
    const { password } = req.body;

    if (!file || !file.mimetype.includes('pdf')) {
      return res.status(400).send('Please upload a valid PDF file.');
    }

    if (!password) {
      return res.status(400).send('Please enter a password.');
    }

    // Add password protection
    protectedFilePath = await ProtectService.passwordProtectPdf(file, password);
    res.render('protect', { protectedFilePath });
  } catch (error) {
    console.error('Error in protectPdf:', error.message);
    res.status(500).send('An error occurred during file protection. Please try again.');
  }
};

const downloadProtectedPdf = (req, res) => {
  try {
    if (!protectedFilePath) {
      return res.status(404).send('No protected PDF available for download.');
    }
    res.download(protectedFilePath);
  } catch (error) {
    console.error('Error in downloadProtectedPdf:', error.message);
    res.status(500).send('An error occurred while downloading the file. Please try again.');
  }
};

module.exports = { protectPage, protectPdf, downloadProtectedPdf };
