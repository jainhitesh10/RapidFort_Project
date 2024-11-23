const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');
const mammoth = require('mammoth');

const convertedDir = './converted';

if (!fs.existsSync(convertedDir)) fs.mkdirSync(convertedDir);

const getFileMetadata = (file) => {
  return {
    originalName: file.originalname,
    size: (file.size / 1024).toFixed(2) + ' KB',
    uploadPath: file.path,
    uploadTime: new Date(),
  };
};

const convertDocxToPdf = async (file) => {
  const docxPath = file.path;
  const pdfPath = path.join(convertedDir, file.originalname.replace('.docx', '.pdf'));

  // Extract text from .docx
  const docxContent = await fs.promises.readFile(docxPath);
  const { value: text } = await mammoth.extractRawText({ buffer: docxContent });

  // Create PDF
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  page.drawText(text, { x: 50, y: page.getHeight() - 50, size: 12 });

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  await fs.promises.writeFile(pdfPath, pdfBytes);

  return pdfPath;
};

module.exports = { getFileMetadata, convertDocxToPdf };
