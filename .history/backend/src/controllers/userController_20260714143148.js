const userService = require("../services/userService");
async function listarUsuarios(req, res) {
    const usuarios =
        await userService.listarUsuarios();
    res.json(usuarios);
}
async function buscarUsuarioPorId(req, res) {
    const id = Number(req.params.id);
    const usuario = 
        await userService.buscarUsuarioPorId(id);
    if (!usuario) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }
    res.json(usuario);
}
function criarUsuario(req, res) {
    const novoUsuario = req.body;
    const usuarioCriado = userService.criarUsuario(novoUsuario);
    res.status(201).json(usuarioCriado);
}
function atualizarUsuario(req, res) {
    const id = Number(req.params.id);
    const dadosAtualizados = req.body;
    const usuarioAtualizado =
        userService.atualizarUsuario(id, dadosAtualizados);
    if (!usuarioAtualizado) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }
    res.json(usuarioAtualizado);
}
function deletarUsuario(req, res) {
    const id = Number(req.params.id);
    const usuarioRemovido = userService.deletarUsuario(id);
    if (!usuarioRemovido) {
        return res.status(404).json({
            mensagem: "Usuário não encontrado"
        });
    }
    res.status(204).send();
}
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};
