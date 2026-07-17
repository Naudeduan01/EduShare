const autenticar = require("../middlewares/authMiddleware");
const trabalhoController = require("../controllers/trabalhoController");
const express = require("express");
const router = express.Router();
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
    trabalhoController.atualizarTrabalho
);
router.delete(
    "/trabalhos/:id",
    trabalhoController.excluirTrabalho
);
module.exports = router;
