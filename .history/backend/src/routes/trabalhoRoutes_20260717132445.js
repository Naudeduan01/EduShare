const autenticar = require("../middlewares/authMiddleware");
const trabalhoController = require("../controllers/trabalhoController");
const express = require("express");
const router = express.Router();
/**
 * @openapi
 * /trabalhos:
 *   post:
 *     summary: Cria um novo trabalho
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
 *         description: Trabalho criado com sucesso
 *       401:
 *         description: Token inválido ou ausente
 */
router.get(
    "/trabalhos",
    trabalhoController.listarTrabalhos
);
router.post(
    "/trabalhos",
    autenticar,
    trabalhoController.criarTrabalho
);
router.get(
    "/trabalhos/:id",
    trabalhoController.buscarTrabalhoPorId
);
router.put(
    "/trabalhos/:id",
    autenticar,
    trabalhoController.atualizarTrabalho
);
router.delete(
    "/trabalhos/:id",
    autenticar,
    trabalhoController.excluirTrabalho
);
module.exports = router;
