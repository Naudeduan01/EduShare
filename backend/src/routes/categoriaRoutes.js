const express = require("express");

const router = express.Router();

const categoriaController =
require("../controllers/categoriaController");

router.get(
    "/categorias",
    categoriaController.listarCategorias
);

router.get(
    "/categorias/:id",
    categoriaController.buscarCategoria
);

router.post(
    "/categorias",
    categoriaController.criarCategoria
);

router.put(
    "/categorias/:id",
    categoriaController.atualizarCategoria
);

router.delete(
    "/categorias/:id",
    categoriaController.excluirCategoria
);

module.exports = router;