const express = require('express');
const app = express();

const petRotas = require('./routes/pet')


app.listen(3000, () => {
    console.log("tô ouvindo");
})

app.use(petRotas)