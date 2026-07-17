const express = require("express");
const router = express.Router();
const authController = 
require("../controllers/authController");
/**
 * @openapi
 * /login:
 *   post:
 *     summary: Realiza autenticação do usuário
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               senha:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Email ou senha inválidos
 */
router.post("/login", authController.login);
router.post(
    "/login",
    authController.login
);
module.exports = router;