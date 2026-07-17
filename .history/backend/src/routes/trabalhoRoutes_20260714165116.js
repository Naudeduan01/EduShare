const express = require("express");
const router = express.Router();

router.get("/trabalhos", function(req, res) {
    res.json({
        mensagem: "Rota de trabalhos funcionando"
    });
});

module.exports = router;
