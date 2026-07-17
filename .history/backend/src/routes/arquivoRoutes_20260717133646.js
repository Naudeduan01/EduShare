const autenticar = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const arquivoController =
require("../controllers/arquivoController");
/**
 * @openapi
 * /arquivos:
 *   post:
 *     summary: Envia arquivo para um trabalho
 *     tags:
 *       - Arquivos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               arquivo:
 *                 type: string
 *                 format: binary
 *               trabalho_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Arquivo enviado com sucesso
 */
router.post("/trabalhos/:id/arquivos", upload.single("arquivo"), arquivoController.salvarArquivo);
/**
 * @openapi
 * /arquivos:
 *   get:
 *     summary: Lista arquivos
 *     tags:
 *       - Arquivos
 *     responses:
 *       200:
 *         description: Arquivos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Arquivo'
 */
router.get("/trabalhos/:id/arquivos", arquivoController.listarArquivosPorTrabalho);
/**
 * @openapi
 * /arquivos/{id}:
 *   delete:
 *     summary: Remove arquivo
 *     tags:
 *       - Arquivos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Arquivo removido
 */
router.delete("/arquivos/:id", autenticar, arquivoController.excluirArquivo);
router.get("/arquivos/:id/download", arquivoController.baixarArquivo);
module.exports = router;