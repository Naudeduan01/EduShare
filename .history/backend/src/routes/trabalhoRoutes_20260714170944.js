const trabalhoController = require("../controllers/trabalhoController");
const express = require("express");
const router = express.Router();

/*router.get("/trabalhos", function(req, res) {
    res.json({
        mensagem: "Rota de trabalhos funcionando"
    });
});*/
router.get(
    "/trabalhos",
    trabalhoController.listarTrabalhos
);
router.post(
    "/trabalhos",
    trabalhoController.criarTrabalho
);
module.exports = router;
