const multer = require("multer");
const path = require("path");
const tiposPermitidos = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "video/mp4"
];
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "src/uploads");
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname))
    },
});
const upload = multer({
    storage,
    limits: {
        fileSize: 200 * 1024 * 1024
    },
    fileFilter: function (req, file, callback) {
        if (tiposPermitidos.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error("Tipo de arquivo não permitido."));
        }
    }
});
module.exports = upload;