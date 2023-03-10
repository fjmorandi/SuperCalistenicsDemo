var express = require("express")
var router = express.Router();

router.get("/nomes", (req, res) => {
    res.render("nomes")
})

module.exports = router