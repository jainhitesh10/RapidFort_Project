const express = require('express');
const multer = require('multer');
const ConvertController = require('../controllers/ConvertController');

const router = express.Router();
const upload = multer({ dest: './uploads/' });

// Landing page (index.ejs)
router.get('/', (req, res) => {
    res.render('index');
  });

router.get('/convert', ConvertController.convertPage);
router.post('/convert', upload.single('file'), ConvertController.convertDocxToPdf);
router.get('/convert/download', ConvertController.downloadPdf);

module.exports = router;
