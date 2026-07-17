const autenticar = require("../middlewares/authMiddleware");
const trabalhoController = require("../controllers/trabalhoController");
const express = require("express");
const router = express.Router();
/**
 * @openapi
 * /trabalhos:
 *   get:
 *     summary: Lista todos os trabalhos
 *     tags:
 *       - Trabalhos
 *     responses:
 *       200:
 *         description: Trabalhos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Trabalho'
 */
router.get("/trabalhos",trabalhoController.listarTrabalhos);
/**
 * @openapi
 * /trabalhos:
 *   post:
 *     summary: Cria um trabalho
 *     tags:
 *       - Trabalhos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trabalho'
 *     responses:
 *       201:
 *         description: Trabalho criado
 *       401:
 *         description: Não autenticado
 */
router.post("/trabalhos", autenticar, trabalhoController.criarTrabalho);
router.get("/trabalhos/:id", trabalhoController.buscarTrabalhoPorId);
/**
 * @openapi
 * /trabalhos/{id}:
 *   put:
 *     summary: Atualiza um trabalho
 *     tags:
 *       - Trabalhos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trabalho'
 *     responses:
 *       200:
 *         description: Trabalho atualizado
 */
router.put("/trabalhos/:id", autenticar, trabalhoController.atualizarTrabalho);
/**
 * @openapi
 * /trabalhos/{id}:
 *   delete:
 *     summary: Remove um trabalho
 *     tags:
 *       - Trabalhos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Trabalho removido
 */
router.delete("/trabalhos/:id", autenticar, trabalhoController.excluirTrabalho);
module.exports = router;
