const express = require('express');
const multer = require('multer');
const ProtectController = require('../controllers/ProtectController');

const router = express.Router();
const upload = multer({ dest: './uploads/' });

router.get('/protect', ProtectController.protectPage);
router.post('/protect', upload.single('file'), ProtectController.protectPdf);
router.get('/protect/download', ProtectController.downloadProtectedPdf);

module.exports = router;
