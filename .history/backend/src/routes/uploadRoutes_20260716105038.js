const express = rquire("express")
const router = express.Router();
const upload = require("../config/multer");
const uploadController = require("../controllers/uploadController");
router.post(
    "/upload",
    upload.single("arquivo"),
    uploadController.uploadArquivo
),
module.exports = router;