const express = require('express')
const app = require("./app");
const port = 3000


app.listen(port, () => {
    console.log(`Bota pra ferver, essa bexiga!`);
    console.log(`(App ouvindo a porta ${port}.)`);
})

