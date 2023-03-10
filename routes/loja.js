var express = require('express')
var router = express.Router()

router.get('/nossaloja', (req, res) => {
    res.render("nossaloja")
})

module.exports = router;