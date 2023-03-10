var express = require("express");
var router = express.Router();

router.get("/galeria", (req, res) => {
    res.render("galeria")
})

module.exports = router;