const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const arquivoController =
require("../controllers/arquivoController");
router.post(
    "/trabalhos/:id/arquivos",
    upload.single("arquivo"),
    arquivoController.salvarArquivo
);
router.get(
    "/trabalhos/:id/arquivos",
    arquivoController.listarArquivosPorTrabalho
);
router.delete(
    "/arquivos/:id",
    arquivoController.excluirArquivo
);
router.get(
    "/arquivos/:id/download",
    arquivoController.baixarArquivo
);
module.exports = router;