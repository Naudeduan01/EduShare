const userService = require("../services/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function login(req, res, next) {
    console.log(req.body);
    try {
        const { email, senha } = req.body;
        const usuario =
            await userService.buscarPorEmail(email);
        if (!usuario) {
            return res.status(401).json({
                mensagem: "Email ou senha inválidos"
            });
        }
        const senhaValida =
            await bcrypt.compare(
                senha,
                usuario.senha
            );
        if (!senhaValida) {
            return res.status(401).json({
                mensagem: "Email ou senha inválidos"
            });
        }
        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:
                process.env.JWT_EXPIRES_IN
            }
        );
        res.json({
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            },
            token
        });
    } catch(error) {
        next(error);
    }
}
module.exports = {
    login
};