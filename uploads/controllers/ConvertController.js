const ConvertService = require('../services/convertService');

let convertedFileMetadata = {}; // Store metadata during runtime

const convertPage = (req, res) => {
  res.render('convert', { metadata: null, pdfPath: null });
};

const convertDocxToPdf = async (req, res) => {
  const file = req.file;

  if (!file || !file.mimetype.includes('wordprocessingml.document')) {
    return res.status(400).send('Please upload a valid .docx file.');
  }

  // Extract metadata
  convertedFileMetadata = ConvertService.getFileMetadata(file);

  // Convert DOCX to PDF
  const pdfPath = await ConvertService.convertDocxToPdf(file);

  // Update metadata with PDF path
  convertedFileMetadata.pdfPath = pdfPath;

  res.render('convert', { metadata: convertedFileMetadata, pdfPath });
};

const downloadPdf = (req, res) => {
  if (!convertedFileMetadata.pdfPath) {
    return res.status(404).send('No converted file found.');
  }
  res.download(convertedFileMetadata.pdfPath);
};

module.exports = { convertPage, convertDocxToPdf, downloadPdf };
