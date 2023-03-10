var express = require('express')
var router = express.Router()

router.get('/esporte', (req, res) => {
  res.render("esporte")
});

module.exports = router;