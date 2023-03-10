const express = require("express")
const router = express.Router();

const paginaEsporte = require('./routes/esporte')
const paginaHome = require('./routes/home')
const paginaNomes = require("./routes/nomes")
const paginaGaleria = require("./routes/galeria")
const paginaLoja = require("./routes/loja");

router.get('/esporte', paginaEsporte)
router.get('/', paginaHome)
router.get('/nomes', paginaNomes)
router.get("/galeria", paginaGaleria)
router.get("/nossaloja", paginaLoja)


module.exports = router